import { expect, test } from '@playwright/test';

const baseURL = 'http://127.0.0.1:5500/API_FAKE/api_fake.html';
const endpoint = 'http://localhost:3000';

async function simularGET(endpoint) {
    try {
        const response = await fetch(`${endpoint}/pessoa`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch:', error);
        throw error;
    }
}

test('fazer requisição GET e validar exibição na tabela', async ({ page }) => {
    try {
        // Simular a requisição GET
        const respostaSimulada = await simularGET(endpoint);
        console.log('Resposta simulada:', respostaSimulada);

        // Navegar até a página onde a tabela está localizada
        await page.goto(baseURL);

        // Preencher o campo de URL com o endpoint
        await page.locator("input[id='URL']").fill(endpoint);

        // Clicar no botão que deve atualizar a tabela
        await page.locator('#nova_pessoa').click();

        // Esperar a tabela estar visível e atualizar
        await page.waitForSelector('#table', { state: 'visible', timeout: 5000 });

        // Aguardar as linhas da tabela serem carregadas
        const rows = await page.locator('#table tbody tr').all();

        // Verificar a quantidade de linhas
        console.log('Número de linhas encontradas:', rows.length);

        // Obter e logar o texto de cada linha
        for (const [index, row] of rows.entries()) {
            const nome = await row.locator('td:nth-of-type(1)').textContent();
            const email = await row.locator('td:nth-of-type(2)').textContent();
            const tipo = await row.locator('td:nth-of-type(3)').textContent();
            console.log(`Linha ${index + 1}: Nome = ${nome}, Email = ${email}, Tipo = ${tipo}`, rows.entries());
        }

    } catch (error) {
        console.error('Erro durante o teste:', error);

        // Capturar um screenshot para depuração

        throw error;
    }
});
