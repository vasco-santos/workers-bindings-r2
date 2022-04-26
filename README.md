# CF Worker using Bindings and R2

## Prepare

1. Install dependencies using pnpm `pnpm install`
2. Update both `packages/api/wrangler.toml` and `packages/gateway/wrangler.toml` to use your account id
3. Create R2 bucket using `wrangler r2 bucket create r2-test`
4. Navigate to `packages/gateway` publish worker using `wrangler publish` and toke note of the URL it is running on.
(Be aware that you need to either use wrangler@2 or you will need to assign Binding in your CF Dashboard)
5. Go to `packages/api/index.js` and update fetch request to have Gateway URL. 
6. Navigate to `packages/api` publish worker using `wrangler publish`
7. Run `wrangler tail` in both projects
8. Use your preferred HTTP Client to perform a request to the API worker
