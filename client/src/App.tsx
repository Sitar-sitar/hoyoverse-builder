import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/_core/hooks/useAuth";
import { consumeLoginReturnPath } from "@/lib/loginReturnPath";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import { Suspense, lazy, useEffect } from "react";
import AdminLogoutButton from "./components/AdminLogoutButton";
import ErrorBoundary from "./components/ErrorBoundary";
import PublicCatalogShortcut from "./components/PublicCatalogShortcut";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

// 画面はルート単位で遅延読み込みする（設計: docs/修正設計書_Pagesのルート単位コード分割_2026-09-10.md）。
// NotFound は catch-all で小さいため同期のまま（遅延にすると 404 の前にフォールバックが一瞬出る）。
const Home = lazy(() => import("./pages/Home"));
const CharacterCatalog = lazy(() => import("./pages/CharacterCatalog"));
const GuideHistory = lazy(() => import("./pages/GuideHistory"));
const TranslationFeedback = lazy(() => import("./pages/TranslationFeedback"));
const AdminHome = lazy(() => import("./pages/AdminHome"));
const FeedbackAdmin = lazy(() => import("./pages/FeedbackAdmin"));

/** 画面チャンクの取得中に描く外枠だけのプレースホルダ。文言を出すと初回表示でちらつくため空にする。 */
function RouteFallback() {
  return <div className="min-h-screen" aria-busy="true" />;
}

function Router() {
  const [, setLocation] = useLocation();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (loading || !isAuthenticated) return;
    const returnTo = consumeLoginReturnPath();
    if (returnTo && !window.location.pathname.endsWith(returnTo)) {
      setLocation(returnTo);
    }
  }, [isAuthenticated, loading, setLocation]);

  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/characters"} component={CharacterCatalog} />
        <Route path={"/updates"} component={GuideHistory} />
        <Route path={"/feedback"} component={TranslationFeedback} />
        <Route path={"/admin"} component={AdminHome} />
        <Route path={"/admin/feedback"} component={FeedbackAdmin} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  const routerBase = import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <WouterRouter base={routerBase}>
              <Router />
              <PublicCatalogShortcut />
              <AdminLogoutButton />
            </WouterRouter>
          </LanguageProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
