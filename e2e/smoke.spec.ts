import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Fitness Coach/);
});

test('renders app root', async ({ page }) => {
    await page.goto('/');

    // Expect the React root to be present
    await expect(page.locator('#root')).toBeVisible();
});
