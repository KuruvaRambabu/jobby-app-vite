import { test, expect } from "@playwright/test";
import jobsData from "../src/fixtures/jobsDataPlaywright.json" assert { type: "json" };
import profileData from "../src/fixtures/profileResponsePlaywright.json" assert { type: "json" };
import jobDetailsDataPlayWright from "../src/fixtures/jobDetailsDataPlayWright.json" assert { type: "json" };

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveURL("http://localhost:5173/login");
  await page.getByPlaceholder("Password").press("Enter");
  await expect(page.getByText("Username or password is invalid")).toBeVisible();
  await page.getByPlaceholder("Username").fill("rahul");
  await page.getByPlaceholder("Password").fill("rahul@2021");
  await page.getByPlaceholder("Password").press("Enter");
});

test.skip("Jobs Route Success Tests", async ({ page }) => {
  await page.pause();
  await page.goto("http://localhost:5173/jobs");

  await page.route("**/jobs", async (route) => {
    setTimeout(() => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(jobsData),
      });
    }, 1000);
  });

  await page.route("**/profile", async (route) => {
    setTimeout(() => {
      route.fulfill({
        status: 200,
        contentType: "appication/json",
        body: JSON.stringify(profileData),
      });
    });
  });

  await page.waitForSelector('[data-testid="loader"]');
  await page.waitForSelector('[data-testid="loader"]', { state: "hidden" });
  await expect(
    page.locator("label").filter({ hasText: "Full Time" })
  ).toBeVisible();
  await expect(
    page.locator("label").filter({ hasText: "Part Time" })
  ).toBeVisible();
  await expect(
    page.locator("label").filter({ hasText: "Internship" })
  ).toBeVisible();
  await expect(
    page.locator("label").filter({ hasText: "Freelance" })
  ).toBeVisible();
  await expect(page.getByText("10 LPA and above")).toBeVisible();
  await expect(page.getByText("20 LPA and above")).toBeVisible();
  await expect(page.getByText("30 LPA and above")).toBeVisible();
  await expect(page.getByText("40 LPA and above")).toBeVisible();
  await expect(page.getByPlaceholder("Search")).toBeVisible();
  await expect(page.getByRole("link", { name: "website logo" })).toBeVisible();

  const links = await page.$$eval("a", (links) => links.length);
  expect(links).toBe(7);

  const headingElements = await page.$$eval("h1", (heading) => heading.length);
  expect(headingElements).toBe(6);

  const listElements = await page.$$eval("li", (liItem) => liItem.length);
  expect(listElements).toBeGreaterThan(10);

  await page.getByPlaceholder("Search").fill("random");

  await page.locator("label").filter({ hasText: "Freelance" }).click();
  const liElements = await page.$$eval("li", (liItem) => liItem.length);
  expect(liElements).toBeGreaterThan(10);
  await page.locator("label").filter({ hasText: "Part Time" }).click();
  await page.locator("label").filter({ hasText: "Internship" }).click();

  const partTimeFilter = await page.$$eval("link", (liItem) => liItem.length);
  expect(partTimeFilter).toBeLessThan(10);

  await page.getByPlaceholder("Search").fill("");
  await page.locator("label").filter({ hasText: "Internship" }).click();
  await page.locator("label").filter({ hasText: "Part Time" }).click();
  await page.locator("label").filter({ hasText: "Freelance" }).click();

  const partTime = await page.$$eval("li", (liItem) => liItem.length);
  expect(partTime).toBeGreaterThan(10);

  await expect(page.getByRole("img", { name: "profile" })).toBeVisible();
  await expect(page.getByText("Rahul Attluri")).toBeVisible();
  await expect(
    page.getByText("Lead Software Developer and AI-ML expert")
  ).toBeVisible();

  await page.getByText("10 LPA and above").click();
  await page.getByText("20 LPA and above").click();
  await page.getByText("30 LPA and above").click();
  await page.getByText("40 LPA and above").click();

  await page.getByRole("link", { name: "Home" }).click();
  await expect(page).toHaveURL("http://localhost:5173/");
});

test.skip("Jobs Route Failure View Tests", async ({ page }) => {
  await page.pause();
  await page.goto("http://localhost:5173/jobs");
  await page.route("**/jobs", async (route) => {
    setTimeout(() => {
      route.abort("failed");
    }, 1000);
  });

  await page.waitForSelector('[data-testid="loader"]');
  await page.waitForSelector('[data-testid="loader"]', { state: "hidden" });

  await expect(page.getByRole("button", { name: "Retry" })).toBeVisible();
  await page.getByRole("button", { name: "Retry" }).click();
  await page.waitForSelector('[data-testid="loader"]');
  await page.waitForSelector('[data-testid="loader"]', { state: "hidden" });
});

test.skip("Profile Api Success view", async ({ page }) => {
  await page.pause();
  await page.goto("http://localhost:5173/jobs");

  await page.route("**/profile", async (route) => {
    route.fulfill({
      status: 200,
      contentType: "appication/json",
      body: JSON.stringify(profileData),
    });
  });

  await page.waitForSelector('[data-testid="loader"]');
  await page.waitForSelector('[data-testid="loader"]', { state: "hidden" });

  await expect(page.getByRole("img", { name: "profile" })).toBeVisible();
  await expect(page.getByText("Rahul Attluri")).toBeVisible();
  await expect(
    page.getByText("Lead Software Developer and AI-ML expert")
  ).toBeVisible();
});

test.skip("Profile Api Failure view", async ({ page }) => {
  await page.pause();
  await page.goto("http://localhost:5173/jobs");

  await page.route("**/profile", async (route) => {
    route.abort("failed");
  });

  await page.waitForSelector('[data-testid="loader"]');
  await page.waitForSelector('[data-testid="loader"]', { state: "hidden" });

  expect(
    page.getByRole("complementary").getByRole("button", { name: "Retry" })
  ).toBeVisible();
  page
    .getByRole("complementary")
    .getByRole("button", { name: "Retry" })
    .click();
  await page.waitForSelector('[data-testid="loader"]');
  await page.waitForSelector('[data-testid="loader"]', { state: "hidden" });
});
