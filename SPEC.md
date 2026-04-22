# community-homepage 仕様書

GLOBIS AI Front コミュニティ公式ホームページの仕様を定義する。

## 1. 概要

### 目的

- コミュニティの存在・理念を対外的に伝える
- 新規メンバーの参加導線を提供する
- 活動内容・イベント情報を発信する

### スコープ

- 静的コンテンツ中心のウェブサイト
- メンバー管理・認証機能は範囲外（別プロジェクトで検討）

## 2. ターゲット

- 参考: [../community-rule/rules/target.md](../community-rule/rules/target.md)

## 3. 機能要件

（詳細は実装フェーズで詰める。以下は仮のリスト）

- [ ] トップページ（ヒーロー / ミッション / CTA）
- [ ] コミュニティ紹介（MVV / 名前の由来）
- [ ] メンバーシップ案内（参加方法・規約）
- [ ] 活動・イベント情報
- [ ] お問い合わせ / 参加申込フォーム

## 4. 非機能要件

- [ ] レスポンシブ対応（モバイル / タブレット / デスクトップ）
- [ ] アクセシビリティ（WCAG 2.1 AA 相当を目標）
- [ ] パフォーマンス（Core Web Vitals Good 水準）
- [ ] SEO 基本対応

## 5. 技術選定（未確定）

| 項目 | 候補 | 備考 |
| ---- | ---- | ---- |
| フロントエンド | Next.js | SSG/ISR を想定 |
| スタイリング | 未定 | Tailwind CSS 等を検討 |
| ホスティング | 未定 | Vercel / Cloudflare Pages 等を検討 |
| CMS | 未定 | 必要に応じて microCMS 等を検討 |

## 6. デザイン

- コンセプト: [../concept/design_context.md](../concept/design_context.md)
- プロンプト: [../concept/design_prompt.md](../concept/design_prompt.md)

## 7. 参考資料

- MVV: （`../community-rule/rules/` 配下に作成予定）
- 名称の由来: [../community-rule/rules/community-name.md](../community-rule/rules/community-name.md)
- メンバーシップ: [../community-rule/rules/membership.md](../community-rule/rules/membership.md)

## 8. 更新履歴

| 日付 | 内容 |
| ---- | ---- |
| 2026-04-22 | 初版作成 |
