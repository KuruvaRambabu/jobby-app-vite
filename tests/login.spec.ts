import { test, expect } from '@playwright/test';

test('Login Page Tests', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.pause()
    await page.getByPlaceholder("Username").fill("rahul")
    await page.getByPlaceholder("Password").fill("rahul@2021")
    await page.getByPlaceholder('Password').press('Enter');
    const texts = await page.getByRole('button');
    await expect(texts).toHaveText("Logout")
    
  });

//   onst texts = await page.getByRole('button');
//     await expect(texts).toHaveText("Login")
//       expect(page.getByPlaceholder('Username').click());
  //   await page.getByPlaceholder('Username').click();
//   await page.getByPlaceholder('Username').fill('Rahul');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('rambabu@2021');
  
