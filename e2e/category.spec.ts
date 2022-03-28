import { expect, test } from '@playwright/test'

test('category', async ({ page }, { project }) => {
  await page.goto('http://localhost:3000/category/game')

  expect(page.locator('h1:has-text("works")'))

  // NOTE:全てのセクションを表示させるため、フッター内のリンクにホバーして下部までスクロールさせる
  await page.hover('data-testid=link-twitter')

  const lastCardTitle = await page
    .locator('a > div > div >> nth=-1')
    .locator('p >> nth=0')
    .textContent()

  // 一番下のカードの表示アニメーションを待つ
  await page.waitForSelector(
    `a:has-text("${lastCardTitle}")[style="opacity: 1; transform: none;"]`
  )

  // ページ全体のスクリーンショット
  await page.screenshot({
    path: `e2e/results/${project.name}/category.png`,
    animations: 'disabled',
    fullPage: true
  })
})
