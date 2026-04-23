# community-homepage

GLOBIS AI Front コミュニティの公式ホームページ。

## 概要

- **プロジェクト名**: community-homepage
- **所属コミュニティ**: GLOBIS AI Front
- **目的**: コミュニティの紹介・メンバー導線・コンテンツ発信を担うホームページを構築する

## 言語・コミュニケーション

- ユーザーとのやり取り、コミットメッセージ、ドキュメント、コード内コメントは日本語を基本とする

## 技術スタック

詳細は [SPEC.md](SPEC.md) の「技術選定」を参照。主要構成は以下:

- フレームワーク: Next.js 16（App Router / Turbopack）
- 言語: TypeScript 5
- スタイリング: Tailwind CSS 4 + shadcn/ui
- パッケージ管理: pnpm
- ホスティング: Vercel

## ディレクトリ構成

```text
community-homepage/
├── README.md          # プロジェクト概要
├── CLAUDE.md          # 本ファイル（プロジェクト憲法）
├── AGENTS.md          # エージェント向け注意事項（Next.js 16）
├── SPEC.md            # 仕様書
├── TASK.md            # タスクリスト
├── src/app/           # App Router エントリ
├── public/            # 静的アセット
├── next.config.ts     # Next.js 設定
├── tsconfig.json      # TypeScript 設定
├── eslint.config.mjs  # ESLint 設定
├── postcss.config.mjs # PostCSS 設定（Tailwind）
└── package.json       # 依存・スクリプト
```

## 関連ドキュメント

- コミュニティコンセプト: [../concept/design_context.md](../concept/design_context.md)
- コミュニティルール: [../community-rule/](../community-rule/)

## ガイドライン

- 変更は最小限にとどめ、不要なリファクタリングを行わない
- 仕様追加・変更時は `SPEC.md` を更新する
- タスクの進捗は `TASK.md` で管理する
