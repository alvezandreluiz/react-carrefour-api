const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Habilitar CORS para todas as origens (pode restringir para localhost:3000 se preferir)
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000' // Permitir apenas requisições do frontend
}));

// Configuração dos cabeçalhos da requisição, caso necessário
const appKey = '';  // Inclua a sua chave
const appToken = '';  // Inclua o seu token

// Endpoint para buscar produtos
app.get('/api/products', async (req, res) => {
    try {
        // A URL da API de produtos
        const url = 'https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=carrefourbr106&page=1&pageSize=10';  // Ajuste conforme necessário
        
        // Fazendo a requisição GET para a API do Carrefour
        const response = await axios.get(url, {
            headers: {
                'X-VTEX-API-AppKey': appKey,
                'X-VTEX-API-AppToken': appToken
            }
        });

        // Verificando se a resposta tem produtos
        if (response.data && response.data.length > 0) {
            res.json({
                products: response.data,
                total: response.data.length,
                totalPages: Math.ceil(response.data.length / 10) // Exemplo de cálculo de páginas
            });
        } else {
            // Caso não haja produtos, retornamos uma mensagem
            res.json({ error: 'Produtos não encontrados' });
        }
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({ error: 'Erro interno ao buscar produtos', message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
