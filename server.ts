// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/mcp', (req, res) => {
  // Aqui você processa a requisição MCP
  res.json({ message: 'MCP recebido', data: req.body });
});

app.listen(3000, () => {
  console.log('Servidor MCP rodando na porta 3000');
});