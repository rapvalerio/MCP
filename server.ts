import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.post('/mcp', (req: Request, res: Response) => {
  res.json({ message: 'MCP recebido', data: req.body });
});

app.listen(3000, () => {
  console.log('Servidor MCP rodando na porta 3000');
});