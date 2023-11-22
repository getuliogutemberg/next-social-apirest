# Meu Servidor Node.js com Express

Bem-vindo. Este servidor serve como um ponto de partida para criar aplicativos web.
Este é um servidor de exemplo construído usando Node.js, Express, Firebase e outras bibliotecas para criar uma API REST. O servidor possui funcionalidades como autenticação de usuários, manipulação de posts, envio de e-mails e upload de documentos PDF.

## Configuração Inicial

Antes de executar o servidor, é necessário configurar algumas variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes informações:

```env
PORT=3000
FIREBASE_API_KEY=SuaChaveDoFirebase
FIREBASE_AUTH_DOMAIN=SeuDominioDoFirebase
FIREBASE_PROJECT_ID=SeuIDDoProjetoFirebase
# ... adicione outras variáveis de ambiente necessárias
```

## Instalação

Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

1. Clone este repositório:

   ```bash
   git clone https://github.com/getuliogutemberg/next-social-apirest.git
   ```
   
2. Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```
    
3. Instale as dependências:

    ```bash
    npm install
   ```
    
4. Uso

Para iniciar o servidor, use o seguinte comando:

    ```bash
    npm start
    ```

O servidor estará acessível em https://capybaquigrafo-apirest.vercel.app/.



## Endpoints da API

A API possui os seguintes endpoints:

    Usuários:
        GET /api/users: Obtém todos os usuários.
        GET /api/users/:id: Obtém um usuário por ID.
        POST /api/users: Adiciona um novo usuário.
        PUT /api/users/:id: Atualiza um usuário existente.
        DELETE /api/users/:id: Exclui um usuário.

    Posts:
        GET /api/posts: Obtém todos os posts.
        GET /api/posts/:id: Obtém um post por ID.
        POST /api/posts: Adiciona um novo post.
        PUT /api/posts/:id: Atualiza um post existente.
        DELETE /api/posts/:id: Exclui um post.

    Documentos PDF:
        POST /api/documents/upload: Faz upload de um documento PDF.
        GET /api/documents/:id: Obtém um documento PDF.

    Outros:
        POST /api/send-validation-email: Envia e-mail de validação.
