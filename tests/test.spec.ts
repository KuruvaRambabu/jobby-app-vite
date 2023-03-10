import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ramkjobbyapp.ccbp.tech/");
  await page.goto("https://ramkjobbyapp.ccbp.tech/login");
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Rahul");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("rambabu@2021");
  await page.getByPlaceholder("Password").press("Enter");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("invalid username").click();
  await page.getByPlaceholder("Password").dblclick();
  await page.getByPlaceholder("Password").press("Control+a");
  await page.getByPlaceholder("Password").fill("rahul@2021");
  await page.getByPlaceholder("Password").press("Enter");
  await page.getByPlaceholder("Password").press("Enter");
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").press("ArrowLeft");
  await page.getByPlaceholder("Username").press("ArrowLeft");
  await page.getByPlaceholder("Username").press("ArrowLeft");
  await page.getByPlaceholder("Username").press("ArrowLeft");
  await page.getByPlaceholder("Username").fill("rahul");
  await page.getByPlaceholder("Username").press("Enter");
  await page
    .getByRole("heading", { name: "Find The Job That Fits Your Life" })
    .click();
  await page.locator("div").nth(3).click();
  await page.getByRole("link", { name: "website logo" }).click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Jobs", exact: true }).click();
  await page.getByRole("link", { name: "Jobs" }).click();
  await page
    .getByRole("link", {
      name: "company logo Devops Engineer 4 Delhi Internship 10 LPA Description We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
    })
    .click();
  await page
    .getByText(
      "The Experimentation Platform team builds internal tools with a big impact across"
    )
    .first()
    .click();
  await page
    .getByRole("listitem")
    .filter({
      hasText:
        "Frontend Engineer5DescriptionThe Experimentation Platform team builds internal t",
    })
    .getByRole("heading", { name: "Frontend Engineer" })
    .click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("button", { name: "Find Jobs" }).click();
  await page.locator("label").filter({ hasText: "Full Time" }).click();
  await page.locator("label").filter({ hasText: "Full Time" }).click();
  await page.locator("label").filter({ hasText: "Part Time" }).click();
  await page.locator("label").filter({ hasText: "Part Time" }).click();
  await page.locator("label").filter({ hasText: "Freelance" }).click();
  await page.locator("label").filter({ hasText: "Freelance" }).click();
  await page.locator("label").filter({ hasText: "Internship" }).click();
  await page.getByLabel("Internship").dblclick();
  await page.getByText("10 LPA and above").click();
  await page.getByText("20 LPA and above").click();
  await page.getByText("30 LPA and above").click();
  await page.getByText("40 LPA and above").click();
  await page
    .getByRole("link", {
      name: "company logo Backend Engineer 5 Mumbai Freelance 45 LPA Description We are looking for engineers who have hands-on experience in building highly reliable distributed systems and have deep expertise in database design & performance tuning. Knowledge of Machine Learning and other Predictive Modeling techniques will be added strength.",
    })
    .click();
  await page.getByRole("link", { name: "Jobs" }).click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("as");
  await page.getByRole("link", { name: "website logo" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("rahul");
  await page.getByPlaceholder("Username").press("Tab");
  await page.getByPlaceholder("Password").fill("rahul@2021");
  await page.getByPlaceholder("Password").press("Enter");
  await page.getByRole("link", { name: "Jobs", exact: true }).click();
  await page
    .getByRole("link", {
      name: "company logo Devops Engineer 4 Delhi Internship 10 LPA Description We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
    })
    .click();
  await page.getByRole("link", { name: "Jobs" }).click();
  await page
    .getByRole("link", {
      name: "company logo Devops Engineer 4 Delhi Internship 10 LPA Description We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
    })
    .click();
  await page.getByRole("heading", { name: "Life At Company" }).click();
  await page
    .locator("div")
    .filter({ hasText: "DescriptionVisit" })
    .getByRole("heading", { name: "Description" })
    .click();
  await page
    .getByText(
      "We are looking for a DevOps Engineer with a minimum of 5 years of industry exper"
    )
    .click();
  await page.getByText("Internship").click();
  await page.getByText("Delhi").first().click();
  await page.getByRole("heading", { name: "Devops Engineer" }).click();
  await page.getByRole("img", { name: "job details company logo" }).click();
  await page.getByText("10 LPA").click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Visit" }).click();
  const page1 = await page1Promise;
  await page
    .getByRole("heading", { name: "Frontend Engineer" })
    .first()
    .click();
  await page.getByRole("heading", { name: "Description" }).nth(1).click();
  await page
    .getByRole("listitem")
    .filter({
      hasText:
        "Frontend Engineer5DescriptionThe Experimentation Platform team builds internal t",
    })
    .getByRole("heading", { name: "Description" })
    .click();
  await page.getByRole("link", { name: "website logo" }).click();
  await page
    .getByRole("heading", { name: "Find The Job That Fits Your Life" })
    .click();
  await page
    .getByText(
      "Millions of people are searching for jobs, salary, information, company reviews."
    )
    .click();
  await page.getByRole("link", { name: "Jobs", exact: true }).click();
  await page.getByText("Type of Employment").click();
  await page.getByRole("img", { name: "profile" }).click();
  await page.getByText("Rahul Attluri").click();
  await page.getByText("Lead Software Developer and AI-ML expert").click();
  await page.getByRole("button", { name: "Logout" }).click();
});
