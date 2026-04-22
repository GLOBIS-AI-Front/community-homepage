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

## 5. 技術選定

### 採用スタック

| 項目              | 採用                                                      | 根拠                                                                                                                                           |
| ----------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --- |
| フレームワーク    | **Next.js 15 (App Router)**                               | RSC による高速初期描画、SSG / ISR / API Routes、Amplify Hosting が compute tier で公式対応                                                     |
| 言語              | **TypeScript 5.x**                                        | 型安全性と長期保守性                                                                                                                           |
| スタイリング      | **Tailwind CSS 4**                                        | デザイントークンの一元管理、Class ベースで RSC と相性良                                                                                        |
| UI コンポーネント | **shadcn/ui + Radix UI**                                  | a11y を標準で担保、コピーで持ち込み可能                                                                                                        |
| バリデーション    | **Zod**                                                   | フォーム入力 / MDX frontmatter / API 境界の型共有                                                                                              |
| フォーム          | **React Hook Form + Zod resolver**                        | 再レンダリングが少なく高速                                                                                                                     |
| 単体/結合テスト   | **Vitest + Testing Library**                              | Vite ベースで高速、Jest 互換 API                                                                                                               |
| E2E テスト        | **Playwright**                                            | クロスブラウザ、a11y アサーション同梱                                                                                                          |
| API モック        | **MSW**                                                   | ブラウザ / Node で同じ定義を使い回せる                                                                                                         |
| コンテンツ管理    | **リポジトリ内 MDX + TypeScript データ**（外部 CMS なし） | Git と PR でレビュー・差分管理・ロールバックが可能。型付きデータで壊れない                                                                     |
| MDX 処理          | `@next/mdx` **+ remark/rehype プラグイン**                | App Router ネイティブ対応。目次・シンタックスハイライトなど標準的                                                                              |
| <!--              | メール送信                                                | **AWS SES**（`@aws-sdk/client-sesv2`）                                                                                                         | AWS 内完結、送達信頼性、IAM と IP 評価管理、コスト優位 | --> |
| <!--              | 解析                                                      | **GA4 + CloudWatch RUM**（必要最低限）                                                                                                         | 公開サイトの標準指標を押さえつつ AWS 側で完結          | --> |
| <!--              | エラー監視                                                | **Sentry**                                                                                                                                     | フロント/サーバ統合                                    | --> |
| デプロイ          | **AWS Amplify Hosting (Next.js compute tier)**            | Next.js 15 App Router / SSR / ISR / Image Optimization を公式対応。CloudFront + S3 を自動構成、PR プレビュー環境つき、IaC 不要で運用コスト最小 |
| CDN / 配信        | **CloudFront**（Amplify 配下で自動構成）                  | エッジ配信、`Cache-Control` / 画像最適化を活用                                                                                                 |
| CI/CD             | **GitHub Actions + OIDC → AWS**                           | 長期アクセスキー不要、IAM Role を `sts:AssumeRoleWithWebIdentity` で引受                                                                       |
| パッケージ管理    | **pnpm**                                                  | 高速で厳格な依存解決                                                                                                                           |

## 6. デザイン

- コンセプト: [../concept/design_context.md](../concept/design_context.md)
- プロンプト: [../concept/design_prompt.md](../concept/design_prompt.md)

## 7. 参考資料

- MVV: （`../community-rule/rules/` 配下に作成予定）
- 名称の由来: [../community-rule/rules/community-name.md](../community-rule/rules/community-name.md)
- メンバーシップ: [../community-rule/rules/membership.md](../community-rule/rules/membership.md)

## 8. 更新履歴

| 日付       | 内容     |
| ---------- | -------- |
| 2026-04-22 | 初版作成 |
