import { test, expect } from '@playwright/test';

test('Should have shuffle cards info', async ({ page }) => {
    await page.goto('/');

    const shuffleCardsText = await page.locator('#shuffle').textContent();
    expect(shuffleCardsText).toBe('Shuffle the Cards:');

    const shuffleCardsUrl = await page.locator('#shuffle + pre').textContent();
    // expect(shufflesCardsUrl).toBe('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    expect(shuffleCardsUrl).toContain('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
});
