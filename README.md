# Select Bargain Store Page (Single Ver.)

## 開発環境のセットアップ
1. 任意のディレクトリでリポジトリをクローンします。
   ```bash
   git clone https://github.com/shimizuyousuke-star/Select_bargain_store_page_singlever.git
   cd Select_bargain_store_page_singlever
   ```
2. 依存関係をインストールします。
   ```bash
   npm install
   ```

## Supabase 環境変数の設定（任意）
お問い合わせフォームを Supabase と連携させる場合は、プロジェクトルートに `.env.local` を作成し、以下の環境変数を設定してください。
```bash
VITE_SUPABASE_URL=あなたのSupabaseプロジェクトURL
VITE_SUPABASE_ANON_KEY=あなたのSupabaseAnonKey
```
環境変数を設定しない場合、問い合わせ送信機能は無効化されますが、ページの表示やその他の機能には影響しません。

## 開発サーバーの起動
```bash
npm run dev
```
必要に応じて `-- --host 0.0.0.0 --port 5173` を付けて外部デバイスからアクセスできます。

ブラウザで `http://localhost:5173` にアクセスして動作を確認してください。

## ビルド
本番ビルドを作成する場合は以下を実行します。
```bash
npm run build
```
