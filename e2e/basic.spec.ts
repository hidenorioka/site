import { test, expect } from "@playwright/test";

test.describe("hidenorioka.com E2E", () => {
  test("トップページが表示される", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/hidenorioka/);
    await expect(page.getByRole("heading", { name: "岡 英紀" })).toBeVisible();
    await expect(page.getByText("Hidenori Oka")).toBeVisible();
  });

  test("SNSリンクが正しいURLで存在する", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/hidenorioka",
    );
    await expect(page.getByRole("link", { name: "Zenn" })).toHaveAttribute(
      "href",
      "https://zenn.dev/hidenorioka",
    );
    await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://jp.linkedin.com/in/hidenorioka",
    );
    await expect(page.getByRole("link", { name: "Wantedly" })).toHaveAttribute(
      "href",
      "https://www.wantedly.com/id/vwkr6t",
    );
    await expect(page.getByRole("link", { name: "YOUTRUST" })).toHaveAttribute(
      "href",
      "https://youtrust.jp/users/hidenorioka",
    );
  });

  test("記事リンクが正しいURLで存在し、遷移できる", async ({
    page,
    context,
  }) => {
    await page.goto("/");
    const [articlePage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("link", { name: /eslint-plugin-import/ }).click(),
    ]);
    await expect(articlePage).toHaveURL(
      "https://zenn.dev/hidenorioka/articles/62b7afaef78f32",
    );
    await articlePage.close();
  });

  test("資格リンクが正しいURLで存在し、遷移できる", async ({
    page,
    context,
  }) => {
    await page.goto("/");
    // AWS Solutions Architect
    const [saPage] = await Promise.all([
      context.waitForEvent("page"),
      page
        .getByRole("link", { name: /AWS Certified Solutions Architect/ })
        .click(),
    ]);
    await saPage.waitForLoadState("domcontentloaded");
    await expect(saPage.url()).toMatch(
      /^https:\/\/www\.credly\.com\/badges\/[a-z0-9-]+\/public_url$/,
    );
    await saPage.close();
    // AWS Cloud Practitioner
    const [cpPage] = await Promise.all([
      context.waitForEvent("page"),
      page
        .getByRole("link", { name: /AWS Certified Cloud Practitioner/ })
        .click(),
    ]);
    await cpPage.waitForLoadState("domcontentloaded");
    await expect(cpPage.url()).toMatch(
      /^https:\/\/www\.credly\.com\/badges\/[a-z0-9-]+\/public_url$/,
    );
    await cpPage.close();
  });

  test("フッターのリンクが正しいURLで存在し、遷移できる", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "トップ" })).toHaveAttribute(
      "href",
      "/",
    );
    await expect(
      page.getByRole("link", { name: "プライバシーポリシー" }),
    ).toHaveAttribute("href", "/privacy-policy");
    // プライバシーポリシーに遷移できるか
    await page.getByRole("link", { name: "プライバシーポリシー" }).click();
    await expect(page).toHaveURL(/\/privacy-policy/);
  });

  test("テーマ切り替えボタンで元のテーマに戻る", async ({ page }) => {
    await page.goto("/");
    const button = page.getByRole("button", { name: "テーマ切り替え" });
    const html = page.locator("html");
    // 1回目クリックでダーク
    await button.click();
    await expect(html).toHaveClass(/dark/);
    // 2回目クリックでライト（darkが消える）
    await button.click();
    await expect(html).not.toHaveClass(/dark/);
  });
});
