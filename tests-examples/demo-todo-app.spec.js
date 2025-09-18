// @ts-check
import { test, expect } from '@playwright/test';

test('should allow me to add and complete todos', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // Add a new todo
  await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  // Check that the new todo is visible
  await expect(page.getByText('Buy milk')).toBeVisible();

  // Mark the todo as completed
  const todoItem = page.locator('.todo-list li', { hasText: 'Buy milk' });
  await todoItem.locator('.toggle').check();

  // Check that the todo is marked as completed
  await expect(todoItem).toHaveClass(/completed/);
});
