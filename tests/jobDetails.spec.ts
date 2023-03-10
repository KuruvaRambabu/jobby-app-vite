import { test, expect } from "@playwright/test";
import jobsData from "../src/fixtures/jobsDataPlaywright.json" assert { type: "json" };
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

test.skip("Job Details Route Api Success view", async ({ page }) => {
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

  await page
    .getByRole("link")
    .filter({
      hasText:
        "Devops Engineer4DelhiInternship10 LPADescriptionWe are looking for a DevOps Engi",
    })
    .click();

  await page.route(
    "http://localhost:5173/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",

    async (route) => {
      setTimeout(() => {
        route.fulfill({
          status: 200,
          contentType: "appication/json",
          body: JSON.stringify(jobDetailsDataPlayWright),
        });
      });
    }
  );

  await page.pause();
  await expect(page).toHaveURL(
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

test("Job Details Route Api view", async ({ page }) => {
  await page.pause();
  await page.goto(
    "http://localhost:5173/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
  );

  await page.route(
    "http://localhost:5173/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",

    async (route) => {
      setTimeout(() => {
        route.fulfill({
          status: 200,
          contentType: "appication/json",
          body: JSON.stringify(jobDetailsDataPlayWright),
        });
      });
    }
  );

  await page.pause();

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

test("Job Details Route Api failure view", async ({ page }) => {
  await page.pause();
  await page.goto(
    "http://localhost:5173/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
  );

  await page.route(
    "http://localhost:5173/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",

    async (route) => {
      setTimeout(() => {
        route.abort("failed");
      });
    }
  );
  await page.waitForSelector('[data-testid="loader"]');
  await page.waitForSelector('[data-testid="loader"]', { state: "hidden" });

  await expect(page.getByRole("button", { name: "Retry" })).toBeVisible();
  await page.getByRole("button", { name: "Retry" }).click();

  await page.pause();
});
