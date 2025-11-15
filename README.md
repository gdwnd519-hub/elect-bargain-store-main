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

## Vercelでのデプロイ

### デプロイ手順
1. [Vercel](https://vercel.com)にログインし、GitHubリポジトリをインポートします
2. プロジェクト設定で以下を確認：
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 環境変数の設定
Vercelダッシュボードで環境変数を設定します：

1. Vercelプロジェクトの **Settings** → **Environment Variables** に移動
2. 以下の環境変数を追加：
   - `VITE_SUPABASE_URL`: あなたのSupabaseプロジェクトURL
   - `VITE_SUPABASE_ANON_KEY`: あなたのSupabase Anon Key

3. 環境変数の適用範囲を選択：
   - **Production** (本番環境)
   - **Preview** (プレビュー環境)
   - **Development** (開発環境)

4. **Save** をクリックして保存

### 環境変数について
- **Supabase URL と Anon Key**: これらはGit管理外で問題ありません。Vercelの環境変数として設定してください。
- **Anon Key**: フロントエンドで使用されるため、公開されても問題ありません。RLS（Row Level Security）が適切に設定されているため安全です。
- **⚠️ 重要**: Service Role Keyは**絶対に公開しないでください**。フロントエンドでは使用しないでください。

### デプロイ後の確認
デプロイが完了したら、問い合わせフォームが正常に動作することを確認してください。
環境変数が設定されていない場合、問い合わせ送信機能は無効化されますが、ページの表示には影響しません。