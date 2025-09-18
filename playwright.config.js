// filepath: c:\Users\R\Desktop\Playwright1\playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

export default defineConfig({

// module.exports = defineConfig({
    testDir: './tests',
    // retries: 0,
    // timeout: 30000,
    // Run tests in files in parallel
    fullyParallel: true,
    // Fail the build on CI if you accidentally left test.only in the source code
    forbidOnly: !!process.env.CI,
    // Retry on CI only
    retries: process.env.CI ? 2 : 0,
    // Opt out of parallel tests on CI
    workers: process.env.CI ? 1 : undefined,
    // Reporter - to use. See https://playwright.dev/docs/test—reporters
    reporter: 'html',
    // Shared settings for all the projects below. See https://playwright.dev/docs/api/class—testoptions.
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        // baseURL: 'http://localhost:3000',
        baseURL: 'https://www.deckofcardsapi.com/',
        trace: 'on-first-retry', // for debugging purposes (test failures)
    },
    projects: [
        { 
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },

        // {
        //     name: 'edge',
        //     use: { ...devices['Desktop Edge'] }, // Microsoft Edge uses Chromium engine under the hood, just like Google Chrome
        // },

        // {
        //     name: 'opera',
        //     use: { ...devices['Desktop Opera'] }, // Opera also uses Chromium engine
        // },
    ],
});
