# 第22バッチ — コロンビーナの命ノ星座（2026-09-29）

原神 Ver.7.1 のコロンビーナ（水・法器）の命ノ星座6段を登録した。母集団は増えない（既に図鑑に登録済み）。

## 正規ID

- 正規ID は **`10000125`**。AnimeGameData の `AvatarExcelConfigData.json`（水・法器・☆5、`skillDepotId` 12501、アイコン `UI_AvatarIcon_Columbina`）と genshin-db（`characters/columbina.json`、命ノ星座は `constellations/columbina.json` の id 12501）で確認した。
- Enka `store/characters.json`（2026-09-29 取得）には `10000125` が依然として無い。`10000904` は炎・香菱アイコン流用のプレースホルダーで、これは対象にしない（batch-20 の判断どおり）。
- 図鑑の名前索引は Enka 由来のスナップショットで `10000904` を指すため、`CATALOG_SOURCE_ID_TIEBREAK` に `genshin:コロンビーナ → 10000125` を追加した。

## 出典（全6段の日本語本文が一致）

- 名称・本文（日・英・中）: genshin-db（AnimeGameData 由来）。
- [Game8](https://game8.jp/genshin/466953)（最終更新 2026-09-29 14:35）と [GameWith](https://gamewith.jp/genshin/article/show/510862)（最終更新 2026-09-29 14:30）の凸効果一覧と、名称・本文とも一致することを機械照合した。

`targetChanges` は、効果が戦闘中・条件付きで公開プロフィールの比較項目に無いため全段で空。

## 残り

アーロイ（凸が存在しない）、ピュロイス（6段目未公開）は据え置き。
