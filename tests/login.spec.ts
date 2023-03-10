import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveURL("http://localhost:5173/login");
  await page.getByPlaceholder("Password").press("Enter");
  await expect(page.getByText("Username or password is invalid")).toBeVisible();
  await page.getByPlaceholder("Username").fill("rahul");
  await page.getByPlaceholder("Password").fill("rahul@2021");
  await page.getByPlaceholder("Password").press("Enter");
});

test.skip("Job Details Route Api Success  from jobs page view", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveURL("http://localhost:5173/login");
  await page.pause();

  await page.getByPlaceholder("Password").press("Enter");

  await page.route("https://apis.ccbp.in/login", async (route) => {
    async (route) => {
      route.abort("failed");
    };
  });
  await page.pause();
  await expect(page.getByText("Username or password is invalid")).toBeVisible();
  await page.getByPlaceholder("Username").fill("rahul");
  await page.getByPlaceholder("Password").fill("rahul@2021");
  await page.getByPlaceholder("Password").press("Enter");
  await page.route("https://apis.ccbp.in/login", async (route) => {
    setTimeout(() => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          jwt_token: "asdfsadfsafderf",
        }),
      });
    }, 1000);
  });
  await expect(page).toHaveURL("http://localhost:5173/");
});

test("Home Route Tests", async ({ page }) => {
  await expect(page).toHaveURL("http://localhost:5173/");
  await expect(
    page.getByText("Find The Job That Fits Your Life")
  ).toBeVisible();
  await expect(
    page.getByText(
      "Millions of people are searching for jobs, salary, information, company reviews. Find the Jobs that fits your abilities and potential"
    )
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Find Jobs" })).toBeVisible();
  await expect(page.getByRole("button")).toHaveText("Logout");
  await page.getByRole("link", { name: "Find Jobs" }).click();
});
