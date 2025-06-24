import { test, expect } from "@playwright/test";

test.describe("top page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("トップページが表示される", async ({ page }) => {
    // メインヘッダーの確認
    await expect(page.locator("h1")).toContainText("岡 英紀");
  });
});
