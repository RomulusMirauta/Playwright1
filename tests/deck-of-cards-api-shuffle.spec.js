import { test, expect } from '@playwright/test';
// import { log } from 'console';

test('API test for deck of cards - shuffle', async ({ request }) => {
    // Send a GET request to shuffle a new deck of cards
    const response = await request.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

    // Assert that the response status is 200
    expect(response.status()).toBe(200); // <=> OK

    // Parse the response JSON
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    // log('Response Body:', responseBody);

    // Assert that the deck_id and shuffled properties exist
    expect(responseBody).toHaveProperty('deck_id');
    expect(responseBody.shuffled).toBe(true);

    // Assert that the remaining cards are 52
    expect(responseBody.remaining).toBe(52);

    expect(responseBody.deck_id).toHaveLength(12);
});
