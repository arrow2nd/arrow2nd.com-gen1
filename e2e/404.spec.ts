import { expect, test } from '@playwright/test'

test('404', async ({ page }, { project }) => {
  await page.goto('http://localhost:3000/404')

  expect(page.locator('h1:has-text("Opps!")'))

  // ページ全体のスクリーンショット
  await page.screenshot({
    path: `e2e/results/${project.name}/404.png`,
    fullPage: true
  })
})
