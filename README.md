# arrow2nd.com

ポートフォリオサイトもどき（Gen 4）

[![e2e](https://github.com/arrow2nd/arrow2nd.com/actions/workflows/e2e.yml/badge.svg)](https://github.com/arrow2nd/arrow2nd.com/actions/workflows/e2e.yml)
[![CodeQL](https://github.com/arrow2nd/arrow2nd.com/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/arrow2nd/arrow2nd.com/actions/workflows/github-code-scanning/codeql)
[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=arrow2nd-arrow2nd)](https://www.arrow2nd.com/)

![home](https://user-images.githubusercontent.com/44780846/160341151-eee546ab-565e-418b-92b0-e814b6062d0e.png)

## Develop

以下の内容で`.env.local`を作成

```
SERVICE_DOMAIN=<microCMSのサービスドメイン>
API_KEY=<microCMSのAPIキー>
```

その後、以下のコマンドで実行

```
pnpm build && pnpm start
```
