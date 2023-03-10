import { expect, test } from "@playwright/test";
import jobsData from "../src/fixtures/jobsDataResponseObject.json";

test("Jobby App Mock APIs", async ({ page }) => {
  await page.route("**/jobs", (route) => {
    // Delay the response to simulate loading
    setTimeout(() => {
      // Fulfill the route with a mocked response
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ data: [1, 2, 3] }),
      });
    }, 1000);

    route.fulfill({
      status: 200,
      contentType: "application/json",
      path: "jobsDataResponseObject.json",
    });
  });

  await page.pause();

  await page.goto("http://localhost:5173/jobs");
  const headingElements = await page.$$eval("h1", (heading) => heading.length);
  expect(headingElements).toBeGreaterThan(100);
});

import { test, expect } from "@playwright/test";
import jobsData from "../src/fixtures/jobsDataPlaywright.json" assert { type: "json" };

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveURL("http://localhost:5173/login");
  await page.getByPlaceholder("Password").press("Enter");
  await expect(page.getByText("Username or password is invalid")).toBeVisible();
  await page.getByPlaceholder("Username").fill("rahul");
  await page.getByPlaceholder("Password").fill("rahul@2021");
  await page.getByPlaceholder("Password").press("Enter");
});

test.skip("Home Route Tests", async ({ page }) => {
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

test("Jobs Route Tests", async ({ page }) => {
  await page.goto("http://localhost:5173/jobs");

  await page.route("**http://localhost:5173/jobs", async (route) => {
    // Delay the response to simulate loading

    // Fulfill the route with a mocked response
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(jobsData),
    });
  });
  // Jobs Route

  // await page.waitForSelector('[data-testid="loader"]');

  // // Wait for the loading view to disappear
  // await page.waitForSelector('[data-testid="loader"]', { state: "hidden" });

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
  expect(links).toBeGreaterThan(60);

  const headingElements = await page.$$eval("h1", (heading) => heading.length);
  expect(headingElements).toBeGreaterThan(100);

  const listElements = await page.$$eval("li", (liItem) => liItem.length);
  expect(listElements).toBeGreaterThan(60);

  await page.getByPlaceholder("Search").fill("random");
  await expect(page.getByText("No Jobs Found")).toBeVisible();
  await expect(
    page.getByText("We could not find any jobs try other filter.")
  ).toBeVisible();

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

  // Do something with the element, e.g. click it
  await page.getByRole("link", { name: "Home" }).click();
  await expect(page).toHaveURL("http://localhost:5173/");
});

test.skip("Job Details Route Tests", async ({ page }) => {
  await page.getByRole("link", { name: "Find Jobs" }).click();

  await expect(page).toHaveURL("http://localhost:5173/jobs");

  await page.goto(
    "http://localhost:5173/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
  );

  await expect(
    page.getByRole("heading", { name: "Devops Engineer" })
  ).toBeVisible();
  await expect(page.getByAltText("job details company logo")).toBeVisible();

  await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Life At Company" })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Similar jobs" })
  ).toBeVisible();
});
