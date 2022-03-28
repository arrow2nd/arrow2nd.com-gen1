import { expect, test } from '@playwright/test'

test('category', async ({ page }, { project }) => {
  await page.goto('http://localhost:3000/category/game')

  expect(page.locator('data-testid=title')).toHaveText('works')

  // 最下部までスクロール
  await page.locator('data-testid=footer').scrollIntoViewIfNeeded()

  // 最後のカードの表示アニメーションの完了を待つ
  await page.waitForSelector(
    `[data-testid="last-card"][style="opacity: 1; transform: none;"]`
  )

  // ページ全体のスクリーンショット
  await page.screenshot({
    path: `e2e/results/${project.name}/category.png`,
    animations: 'disabled',
    fullPage: true
  })
})
