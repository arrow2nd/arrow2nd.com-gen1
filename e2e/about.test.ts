import { expect, test } from '@playwright/test'

test('aboutページ', async ({ contextOptions, browser }, { project }) => {
  const saveDir = `e2e/results/${project.name}`
  const context = await browser.newContext({
    ...contextOptions,
    recordVideo: { dir: saveDir }
  })

  const page = await context.newPage()
  await page.goto('http://localhost:3000')

  // aboutページへ移動
  await page.click('[data-testid="link-about"]')

  await context.close()
})
