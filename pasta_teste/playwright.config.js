import { defineConfig } from "@playwright/test"

export default defineConfig({
    testDir: './pasta_teste',
    timeout: '1000',
    use: {
        browserName: 'firefox',
        headless: false,
    },
    
    projects: [{
        name: 'teste playwright',
        testMatch: '**/*.spec.js'
    }]
})
