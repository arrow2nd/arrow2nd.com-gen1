import { expect, test } from '@playwright/test'

test('about', async ({ page }, { project }) => {
  await page.goto('http://localhost:3000/about')

  expect(page.locator('h1:has-text("about")'))

  // NOTE:全てのセクションを表示させるため、フッター内のリンクにホバーして下部までスクロールさせる
  await page.hover('data-testid=link-twitter')

  // 一番下のセクションの表示アニメーションを待つ
  const lastSectionTitle = await page
    .locator('div:has(h3) >> nth=-1')
    .textContent()

  await page.waitForSelector(
    `div:has-text("${lastSectionTitle}")[style="opacity: 1; transform: none;"]`
  )

  // ページ全体のスクリーンショット
  await page.screenshot({
    path: `e2e/results/${project.name}/about.png`,
    animations: 'disabled',
    fullPage: true
  })
})
