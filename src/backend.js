const express = require('express');
const cors = require('cors');

const app = express();


// Define the allowed origin.

// Use the cors middleware with specific configuration allowing all origins.
app.use(cors({
  origin: '*'
}));


app.get('/sse-endpoint', (req, res) => {
  // Cabeçalhos necessários para SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  // Função para enviar eventos
  const sendEvent = (event, data) => {
    res.write(`event: ${event}\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };
  
  // Enviar uma mensagem inicial
  sendEvent('message', 'Conexão estabelecida');
  
  // Enviar atualizações periódicas
  const intervalId = setInterval(() => {
    sendEvent('update', { id: Math.floor(Math.random() * 100), message: 'Nova atualização' });
  }, 5000);
  
  // Limpar o intervalo quando o cliente desconectar
  req.on('close', () => {
    clearInterval(intervalId);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});