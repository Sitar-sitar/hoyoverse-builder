import {BATCH29_TEAMS} from "./batch29Teams";
import { teams } from "../../content/teamBatch23";
import { projectTeams } from "../content/teams";
import { BATCH27_TEAMS } from "./batch27Teams";
import { BATCH24_TEAMS } from "./batch24Teams";
import { BATCH25_TEAMS } from "./batch25Teams";
import { BATCH26_TEAMS } from "./batch26Teams";
import { BATCH28_TEAMS } from "./batch28Teams";
export const SHARED_TEAMS = [
  ...BATCH27_TEAMS,
  ...BATCH24_TEAMS,
  ...BATCH25_TEAMS,
  ...BATCH26_TEAMS,
  ...BATCH28_TEAMS, ...BATCH29_TEAMS,
  ...projectTeams(teams),
];
