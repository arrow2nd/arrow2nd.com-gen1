import { expect, test } from "@playwright/test";

test("404", async ({ page }, { project }) => {
  await page.goto("http://localhost:3000/404");

  expect(page.locator("data-testid=title")).toHaveText("Opps!");

  // 表示アニメーションの完了を待つ
  await page.waitForSelector(
    `[data-testid="last-section"][style="opacity: 1; transform: none;"]`
  );

  // ページ全体のスクリーンショット
  await page.screenshot({
    path: `e2e/results/${project.name}/404.png`,
    fullPage: true
  });
});
