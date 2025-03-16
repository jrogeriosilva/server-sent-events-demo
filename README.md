# Aplicação de Demonstração de Server-Sent Events (SSE)

Este projeto é uma demonstração simples de implementação de Server-Sent Events (SSE), uma tecnologia que permite ao servidor enviar atualizações para o cliente em tempo real através de uma conexão HTTP persistente.

## Sobre o Projeto

Server-Sent Events (SSE) é uma tecnologia web que permite que um servidor envie atualizações para um cliente de forma unidirecional. Ao contrário do WebSocket, que fornece comunicação bidirecional, o SSE é otimizado para casos onde o servidor precisa enviar atualizações para o cliente, mas não precisa receber dados do cliente.

## Como Funciona

O projeto consiste em dois componentes principais:

1. **Servidor SSE** (index.js): 
    - Implementa o endpoint `/sse-endpoint` que envia eventos periódicos para os clientes conectados
    - Roda na porta 3000

2. **Frontend** (frontend.js e index.html):
    - Serve uma página web que se conecta ao endpoint SSE
    - Demonstra como processar diferentes tipos de eventos recebidos do servidor
    - Roda na porta 8080

## Instalação

```bash
# Clone o repositório

# Instale as dependências
npm install
```

## Executando o Projeto

Você precisa iniciar tanto o servidor SSE quanto o frontend:

```bash
# Inicie o servidor SSE em um terminal
npm run backend

# Inicie o frontend em outro terminal
npm run frontend
```

Depois, abra um navegador e acesse:
- Frontend: http://localhost:8080

## Tipos de Eventos

O servidor envia três tipos de eventos:
- **message**: Mensagens simples
- **update**: Dados estruturados com ID e mensagem
- **alert**: Notificações importantes

## Tecnologias Utilizadas

- Node.js
- Express
- HTML/CSS/JavaScript (Frontend)
- Server-Sent Events API
