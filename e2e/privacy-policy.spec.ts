import { test, expect } from "@playwright/test";

test.describe("privacy-policy page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/privacy-policy");
  });

  test("プライバシーポリシーページが表示される", async ({ page }) => {
    // メインヘッダーの確認
    await expect(page.locator("h1")).toContainText("プライバシーポリシー");
  });
});
