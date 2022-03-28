import { expect, test } from '@playwright/test'

test('home', async ({ page }, { project }) => {
  await page.goto('http://localhost:3000/')

  expect(page.locator('text=arrow2nd'))

  // ページ全体のスクリーンショット
  await page.screenshot({
    path: `e2e/results/${project.name}/home.png`,
    fullPage: true
  })
})
