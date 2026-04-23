# community-homepage タスクリスト

進捗ステータス: `TODO` / `WIP` / `DONE` / `BLOCKED`

採用スタックは [SPEC.md](SPEC.md) を参照（Next.js 16 / TypeScript / Tailwind CSS 4 / shadcn/ui / Cloudflare Pages）。

## フェーズ 1: 要件定義

- [ ] `TODO` ターゲット・提供価値の整理
- [ ] `TODO` 必要なページ一覧の洗い出し（トップ / 紹介 / メンバーシップ / イベント / 問い合わせ）
- [ ] `TODO` コンテンツ素材（テキスト・画像）の収集計画
- [ ] `TODO` 問い合わせフォームの送信先・運用フロー決定

## フェーズ 2: 技術選定・設計

- [x] `DONE` フロントエンドフレームワークの確定（Next.js 16 App Router）
- [x] `DONE` スタイリング方針の確定（Tailwind CSS 4 + shadcn/ui）
- [x] `DONE` ホスティング環境の確定（Cloudflare Pages / 静的エクスポート）
- [x] `DONE` CMS 利用可否の判断（リポジトリ内 MDX + TypeScript データ）
- [ ] `TODO` ディレクトリ構成・設計方針の確定（`src/app`、`content/` 等）
- [ ] `TODO` ルーティング方針の確定（動的ルート / ISR 対象の決定）

## フェーズ 3: デザイン

- [ ] `TODO` デザインコンセプトのレビュー（`../concept/design_context.md`）
- [ ] `TODO` ワイヤーフレーム作成
- [ ] `TODO` カラーパレット・タイポグラフィ確定（Tailwind テーマトークン化）
- [ ] `TODO` ハイフィデリティモックアップ作成

## フェーズ 4: 環境構築

- [x] `DONE` プロジェクト初期化（`pnpm create next-app` で Next.js 16 + TS + Tailwind 4 + ESLint + App Router + Turbopack をスキャフォールド。`pnpm build` / `pnpm lint` 成功確認済み）
- [ ] `TODO` Prettier 設定の整備（ESLint は CNA 導入済み）
- [ ] `TODO` Vitest + Testing Library セットアップ
- [ ] `TODO` Playwright セットアップ
- [ ] `TODO` MSW セットアップ
- [ ] `TODO` `@next/mdx` + remark/rehype プラグイン設定
- [ ] `TODO` shadcn/ui 初期化（`pnpm dlx shadcn@latest init`）
- [ ] `TODO` Zod / React Hook Form 導入
- [ ] `TODO` GitHub Actions（lint / typecheck / test）ワークフロー作成

## フェーズ 5: 実装

- [x] `DONE` 共通コンポーネント実装（Nav / Footer / MobileLanding を `src/app/_components/` に配置）
- [x] `DONE` トップページ実装（ClaudeDesign から移植。Hero / WhyNow / WhatIs / WhoJoin / Values / Membership / FAQ / FinalCta / ApplyForm）
- [ ] `TODO` コミュニティ紹介ページ実装
- [ ] `TODO` メンバーシップ案内ページ実装
- [ ] `TODO` 活動・イベント情報ページ実装
- [ ] `WIP` 問い合わせ / 参加申込フォーム実装（UI は配置済み。送信先 API / バリデーション / Zod スキーマは未実装）
- [x] `DONE` レスポンシブ対応（768px ブレークポイントでデスクトップ / モバイル切替）
- [ ] `TODO` アクセシビリティ対応（WCAG 2.1 AA）

## フェーズ 6: 公開準備

- [x] `DONE` Cloudflare Pages プロジェクト作成・GitHub 連携（`globis-ai-front.pages.dev` に配信。Build command: `pnpm build` / Output: `out`）
- [ ] `TODO` 環境変数の整備（Production / Preview / Development）
- [ ] `TODO` ドメイン取得・設定
- [ ] `TODO` SEO メタタグ・OGP 設定
- [ ] `TODO` sitemap.xml / robots.txt 生成
- [ ] `TODO` アナリティクス導入
- [ ] `TODO` 本番リリース

## フェーズ 7: 運用

- [ ] `TODO` コンテンツ更新フロー整備（MDX の PR レビュー運用）
- [ ] `TODO` パフォーマンス監視設定（Core Web Vitals）
- [ ] `TODO` 定期的な依存関係アップデート運用
