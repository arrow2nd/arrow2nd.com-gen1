import { expect, test } from '@playwright/test'

test('about', async ({ page }, { project }) => {
  await page.goto('http://localhost:3000/about')

  expect(page.locator('data-testid=title')).toHaveText('about')

  // 最下部までスクロール
  await page.locator('data-testid=footer').scrollIntoViewIfNeeded()

  // 最後のセクションの表示アニメーションの完了を待つ
  await page.waitForSelector(
    `[data-testid="last-section"][style="opacity: 1; transform: none;"]`
  )

  // ページ全体のスクリーンショット
  await page.screenshot({
    path: `e2e/results/${project.name}/about.png`,
    animations: 'disabled',
    fullPage: true
  })
})
