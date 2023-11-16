require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebaseAdmin = require('firebase-admin');

const app = express();
app.use(bodyParser.json());

// Configurar o CORS
app.use(cors());

const PORT = 3001;


// Configurar Firebase Admin SDK
const serviceAccount = {
  type: 'service_account',
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
};

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const db = firebaseAdmin.firestore();


app.listen(PORT, () => {
  console.log(`Seja Bem-Vindo ao Capybaquigrafo API REST`);
  console.log('Servidor está ouvindo na porta :' + PORT);
  console.log(__dirname );
  console.log(" ");
  console.log("Estes sao os endpoints disponíveis:");
  console.log(" ");
  console.log("GET /api/data");
  console.log("      Esta rota server para obter todos os dados");
  console.log("GET /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log("POST /api/data");
  console.log("      Esta rota server para obter todos os dados");
  console.log("PUT /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log("DELETE /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log(" ");
  console.log("GET /api/data");
  console.log("      Esta rota server para obter todos os dados");
  console.log("GET /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log("POST /api/data");
  console.log("      Esta rota server para obter todos os dados");
  console.log("PUT /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log("DELETE /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log(" "); console.log("GET /api/data");
  console.log("      Esta rota server para obter todos os dados");
  console.log("GET /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log("POST /api/data");
  console.log("      Esta rota server para obter todos os dados");
  console.log("PUT /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log("DELETE /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log(" "); console.log("GET /api/data");
  console.log("      Esta rota server para obter todos os dados");
  console.log("GET /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log("POST /api/data");
  console.log("      Esta rota server para obter todos os dados");
  console.log("PUT /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log("DELETE /api/data/:id");
  console.log("      Esta rota server para obter todos os dados");
  console.log(" ");

});


// Função para formatar as instruções da API
function formatApiInstructions(apiInstructions) {
  let formattedMessage = `
    <style>
      h1 { color: #333; 
      font-size: 2em; margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      font-family: sans-serif;
      }
      i { color: #333;
    
      }
      h3 { font-family: sans-serif;
        color: #333;
      }
      button { margin: 0px;
        font-family: sans-serif;
        font-size: 1em;
      }

      ul { list-style-type: none; padding: 0;
}
      li { font-family: sans-serif;margin-bottom: 20px; }
      b.get { color: #4CAF50; }
      b.post { color: #2196F3; }
      b.put { color: #FF9800; }
      b.delete { color: #E91E63; }
      .capyba { color: purple;
        display: flex;
        
        flex-direction: row;
         }
      .grafo { color: #4CAF50; }
      .endpointcategory {  padding: 50px;
        border: 1px solid #ccc;
      max-width: 600px;
    wrap: break-word;}
      .endpoint { color: #555;
        }
      .body { background-color: #888;padding: 10px;border: 1px solid #333;
       font-style: italic;
       wrap: break-word;
      overflow-wrap: break-word; }
      .instructions { display: flex;
        
        justify-content: end; }
      .method { margin: 0 10px; background-color: #eee; padding: 5px 10px; border-radius: 5px; }
      .method.get { background-color: #4CAF50; color: white; }
      .method.post { background-color: #2196F3; color: white; }
      .method.put { background-color: #FF9800; color: white; }
      .method.delete { background-color: #E91E63; color: white; }
      .method:hover { cursor: pointer; }
      .endpoints { display: flex; flex-direction: row; flex-wrap: wrap; justify-content: start; margin: 50px auto; gap: 50px; }
    </style>
    <h1>Bem-vindo à APIREST </h1>
    <h1><span class="capyba">Capyba<span class="grafo">quígrafo</span></span></h1>
    <br>
    <i class="instructions">${apiInstructions.instructions}</i>
    <br>
    <div class="endpoints">
  `;

  for (const category in apiInstructions.routes) {
    formattedMessage += `
      <div class="endpointcategory">
      <h3>${category.toUpperCase()}:</h3>
      <br>
      <ul>
    `;

    for (const route in apiInstructions.routes[category]) {
      const { description, method, endpoint ,param, body} = apiInstructions.routes[category][route];
      const path = apiInstructions.path.slice(0, -1) + endpoint;
      
      formattedMessage += `
        <li key=${route}>
          
          
          
          
          <p><a href="${path}${param !== undefined ? param :'' }" class=" method ${method.toLowerCase()}">${method}</a>${path} ${param === undefined ? '' : `<input type="text" value="${param}">`}</p>
          ${body !== undefined ? `Body:<p class="body"> ${JSON.stringify(body)}</p>` : ''}
          <i>${description}</i>
        </li>
      `;
    }

    formattedMessage += '</ul><br></div>';
  }

  formattedMessage += `</div>`;

  return formattedMessage;
}

  

app.get('/', (req, res) => {
  
  const apiInstructions = {
    title: "APIREST - Capybaquigrafo",
    path: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    message: "Bem-vindo à APIREST - Capybaquigrafo",
    instructions: "Esta é uma API REST que oferece recursos para gerenciar usuários e posts.",
    routes: {
      users: {
        getAll: {
          description: "Obter todos os usuários",
          method: "GET",
          endpoint: "/users",

          
        },
        getById: {
          description: "Obter um usuário por ID",
          method: "GET",
          param: ":id",
          endpoint: `/users/`,
          
        },
        add: {
          description: "Adicionar um novo usuário",
          method: "POST",
          endpoint: "/users/add",
          
          body: {
            name: "string",
            email: "string",
            password: "string",
            imageURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          }
        },
        update: {
          description: "Atualizar um usuário por ID",
          method: "PUT",
          endpoint: "/users/update/",
          param: ":id",
          body: {
            name: "string",
            email: "string",
            password: "string",
            imageURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          }
        },
        delete: {
          description: "Excluir um usuário por ID",
          method: "DELETE",
          endpoint: "/users/delete/",
          param: ":id",
        },
      },
      posts: {
        getAll: {
          description: "Obter todos os posts",
          method: "GET",
          endpoint: "/posts",
         
        },
        getById: {
          description: "Obter um post por ID",
          method: "GET",
          endpoint: "/posts/",
          param: ":id",
          
        },
        add: {
          description: "Adicionar um novo post",
          method: "POST",
          endpoint: "/posts/add",
         
          body: {
            title: "string",
            content: "string",
            imageURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            createdBy: {
              name: "string",
              email: "string",
              imageURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            },
          }
        },
        update: {
          description: "Atualizar um post por ID",
          method: "PUT",
          endpoint: "/posts/update/",
          param: ":id",
          body: {
            title: "string",
            content: "string",
            imageURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            createdBy: {
              name: "string",
              email: "string",
              imageURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
            },
          }
        },
        delete: {
          description: "Excluir um post por ID",
          method: "DELETE",
          endpoint: "/posts/delete/",
          param: ":id",
          
        },
      },
    },
  };

  const formattedInstructions = formatApiInstructions(apiInstructions);
  

  res.status(200).send(formattedInstructions);
});
// Endpoint para obter todos os usuarios da base de dados
app.get('/users', async (req, res) => {
  try {
  const snapshot = await db.collection('users').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(data).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os dados');
  }
});

// EndPoint para criar um usuario no banco de dados
app.post('/users/add', async (req, res) => {
  try {
    const user = req.body;
    if (!user.name || !user.email || !user.password) {
      res.status(400).send('Todos os campos devem ser preenchidos');
      return
    }
    const isDuplicate = await db.collection('users').where('email', '==', user.email).get();
    if (isDuplicate.docs.length > 0) {
      res.status(409).send('Este usuaário ja existe');
      return
    }

    const newUser = await db.collection('users').add(user);
    if (!newUser) {
      res.status(409).send('Este usuaário ja existe');
      return
    }
    // adiciona chave id no objeto
    await db.collection('users').doc(newUser).update({ id: newUser });
    res.status(201).json({ id: doc.id, ...user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar o usuaário');
  }
})

// Endpoint para ler um usuario da base de dados
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await db.collection('users').doc(id).get();
    if (!doc.exists) {
      res.status(404).send('Usuário não encontrado');
    } else {
      // res.send('Usuaário encontrado com sucesso')
      res.json({ id: doc.id, ...doc.data() }).status(200);
      return
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os dados');
  }
})

// Endpoint para alterar um usuario da base de dados
app.put('/users/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await db.collection('users').doc(id).set(newData, { merge: true });
    res.status(200).json({ id, ...newData });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os dados');
  }
});

// Rota para excluir um usuario da base de dados
app.delete('/users/delete/:id', async (req, res) => {
  const id = req.params.id;
  await db.collection('users').doc(id).delete();
  res.json({ id }).status(200);
});


// Endpoint para obter todos os posts da base de dados
app.get('/posts', async (req, res) => {
  try {
  const snapshot = await db.collection('posts').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(data).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os dados');
  }
});

// Endpoint para adicionar um novo post
app.post('/posts/add', async (req, res) => {
  try {
    const newPost = req.body;
    const postRef = await db.collection('posts').add(newPost);
    if (!postRef) {
      res.status(409).send('Este post ja existe');
    }
    res.status(201).json({ id: postRef.id, ...newPost });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar o post');
  }
});
  
// Endpoint para obter um post por ID
app.get('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await db.collection('posts').doc(id).get();
    if (!doc.exists) {
      res.status(404).send('Post não encontrado');
    } else {
      res.json({ id: doc.id, ...doc.data() }).status(200);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os dados');
  }
});



// Endpoint para atualizar um post por ID
app.put('/posts/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = req.body;
    await db.collection('posts').doc(id).set(updatedPost, { merge: true });
    res.status(200).json({ id, ...updatedPost });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar o post');
  }
});

// Rota para excluir um post por ID
app.delete('/posts/delete/:id', async (req, res) => {
  const id = req.params.id;
  await db.collection('posts').doc(id).delete();
  res.json({ id }).status(200);
});


