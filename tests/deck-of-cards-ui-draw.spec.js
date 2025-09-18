import { test, expect } from '@playwright/test';

test('Should have draw cards info', async ({ page }) => {
    await page.goto('/');

    const drawCardsText = await page.locator('#draw-card').textContent();
    expect(drawCardsText).toBe('Draw a Card:');

    const drawCardsUrl = await page.locator('#draw-card + pre').textContent();
    expect(drawCardsUrl).toContain('https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2');
});
