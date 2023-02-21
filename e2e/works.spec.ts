import { expect, test } from "@playwright/test";

test("works", async ({ page }, { project }) => {
  await page.goto("http://localhost:3000/works/mj-3ds");

  expect(page.locator("data-testid=work-title")).toBeTruthy();

  // 最下部までスクロール
  await page.locator("data-testid=footer").scrollIntoViewIfNeeded();

  // リンクセクションの表示アニメーションの完了を待つ
  await page.waitForSelector(
    `[data-testid="link-section"][style="opacity: 1; transform: none;"]`
  );

  // ページ全体のスクリーンショット
  await page.screenshot({
    path: `e2e/results/${project.name}/works.png`,
    animations: "disabled",
    fullPage: true
  });
});
