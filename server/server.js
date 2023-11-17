require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebaseAdmin = require('firebase-admin');
const multer = require('multer');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

// Configurar o CORS
app.use(cors());

const PORT = 3001;

// Configuração do nodemailer (substitua com suas configurações reais)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'capybaquigrafo@gmail.com',
    pass: 'capyba23',
  },
});


// Configurar Firebase Admin SDK
const serviceAccount = {
  type: 'service_account',
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
};

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  storageBucket: 'next-social-app-a9933.appspot.com',

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
      upload: {
        postFile: {
          description: "Enviar arquivo",
          method: "POST",
          endpoint: "/upload",
          body: {
            file: "file (PDF)",
          },
        },
      },
      download: {
        getPdf: {
          description: "Obter arquivo PDF",
          method: "GET",
          endpoint: "/pdf/termos",
        },
      },
      authentication: {
        login: {
          description: "Login",
          method: "POST",
          endpoint: "/login",
          body: {
            email: "string",
            password: "string",
          },
        },
        logout: {
          description: "Logout",
          method: "POST",
          endpoint: "/logout",
          body: {
            email: "string",
          },
        },
        validateEmail: {
          description: "Validar e-mail",
          method: "POST",
          endpoint: "/validate-email",
          body: {
            token: "string",
          },
        },
        sendValidationEmail: {
          description: "Enviar e-mail de validação",
          method: "POST",
          endpoint: "/send-validation-email",
          body: {
            email: "string",
          },
        },
      },
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
          endpoint: "/users/:id",
        },
        add: {
          description: "Adicionar um novo usuário",
          method: "POST",
          endpoint: "/users/add",
          body: {
            name: "string",
            email: "string",
            password: "string",
            imageURL: "string (URL)",
          },
        },
        update: {
          description: "Atualizar um usuário por ID",
          method: "PUT",
          endpoint: "/users/update/:id",
          param: ":id",
          body: {
            name: "string",
            email: "string",
            password: "string",
            imageURL: "string (URL)",
          },
        },
        delete: {
          description: "Excluir um usuário por ID",
          method: "DELETE",
          endpoint: "/users/delete/:id",
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
          endpoint: "/posts/:id",
          param: ":id",
        },
        add: {
          description: "Adicionar um novo post",
          method: "POST",
          endpoint: "/posts/add",
          body: {
            title: "string",
            content: "string",
            imageURL: "string (URL)",
            createdBy: {
              name: "string",
              email: "string",
              imageURL: "string (URL)",
            },
          },
        },
        update: {
          description: "Atualizar um post por ID",
          method: "PUT",
          endpoint: "/posts/update/:id",
          param: ":id",
          body: {
            title: "string",
            content: "string",
            imageURL: "string (URL)",
            createdBy: {
              name: "string",
              email: "string",
              imageURL: "string (URL)",
            },
          },
        },
        delete: {
          description: "Excluir um post por ID",
          method: "DELETE",
          endpoint: "/posts/delete/:id",
          param: ":id",
        },
      },
      secrets: {
        getAll: {
          description: "Obter todos os posts secretos",
          method: "GET",
          endpoint: "/secrets",
        },
      },
    },
  };
  
  

  const formattedInstructions = formatApiInstructions(apiInstructions);
  

  res.status(200).send(formattedInstructions);
});

// Configuração do multer
const storage = multer.memoryStorage(); // Armazena os arquivos em memória
const upload = multer({ storage: storage });

const bucket = firebaseAdmin.storage().bucket();

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Nenhum arquivo foi enviado.');
    }

    const file = req.file;
    const fileName = `termos-condicoes.pdf`;
    const fileUpload = bucket.file(fileName);

    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on('error', (err) => {
      console.error(err);
      res.status(500).send('Erro durante o upload do arquivo.');
    });

    stream.on('finish', async () => {
      res.status(200).send(`Arquivo ${fileName} carregado com sucesso.`);
    });

    stream.end(file.buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro durante o upload do arquivo.');
  }
});

// Endpoint para obter um arquivo PDF
app.get('/pdf/termos', async (req, res) => {
  try {
    const fileName = 'termos-condicoes.pdf';
    const file = bucket.file(fileName);

    const downloadStream = file.createReadStream();
    downloadStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter o arquivo');
  }
});


// EndPoint de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Consulta o usuário no Firestore
    const userRef = db.collection('users').where('email', '==', email);
    const snapshot = await userRef.get();

    if (snapshot.empty) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Assume que há apenas um usuário com o mesmo e-mail (ou você pode tratar esse caso)
    const user = snapshot.docs[0].data();

    if (user.password !== password) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    if (user.status === 'active') {
      return res.status(400).json({ error: 'Usuário já está logado' });
    }

    // Atualiza o status para "active" no Firestore
    await db.collection('users').doc(snapshot.docs[0].id).update({ status: 'active' });

    res.json({ message: 'Login bem-sucedido', user: { id: snapshot.docs[0].id, email: user.email, status: 'active' } });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para fazer o logout
app.post('/logout', async (req, res) => {
  const { email } = req.body;

  try {
    // Consulta o usuário no Firestore
    const userRef = db.collection('users').where('email', '==', email);
    const snapshot = await userRef.get();

    if (snapshot.empty) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Assume que há apenas um usuário com o mesmo e-mail (ou você pode tratar esse caso)
    const user = snapshot.docs[0].data();

    if (user.status === 'inactive') {
      return res.status(400).json({ error: 'Usuário já está deslogado' });
    }

    // Atualiza o status para "inactive" no Firestore
    await db.collection('users').doc(snapshot.docs[0].id).update({ status: 'inactive' });

    res.json({ message: 'Logout bem-sucedido', user: { id: snapshot.docs[0].id, email: user.email, status: 'inactive' } });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
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
  const { name , email, password, imageURL} = req.body;
  const newUser = 
  {
  name,
  email,
  password,
  imageURL,
  level: 0,
  admin: password === 'capyba' ? true : false,
  verified: false,
  created_at: new Date(),
  updated_at: new Date(),
  deleted_at: new Date(),
  status: "inactive",
  }
  
  try {
    
    if (!newUser.name || !newUser.email || !newUser.password) {
      res.status(400).send('Todos os campos devem ser preenchidos');
      return
    }
    const isDuplicate = await db.collection('users').where('email', '==', newUser.email).get();
    if (isDuplicate.docs.length > 0) {
      res.status(409).send('Este usuário ja existe');
      return
    }

    const createresponse = await db.collection('users').add(newUser);

    if (!createresponse) {
      res.status(409).send('Este usuário ja existe');
      return
    }
    // adiciona chave id no objeto
    await db.collection('users').doc(createresponse.id).update({ id: createresponse.id });
    res.status(201).json({ id: createresponse.id, ...newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao adicionar o usuaário');
  }
})

// Endpoint para enviar e-mail de validação com token
app.post('/send-validation-email', (req, res) => {
  try {
    const { email } = req.body;

    // Gerar um token com o e-mail
    const token = jwt.sign({ email }, 'secreto', { expiresIn: '1h' });

    // Configurar o e-mail
    const mailOptions = {
      from: 'capybaquigrafo@gmail.com',
      to: email,
      subject: 'E-mail de Validação',
      text: `Use o seguinte token para validar seu e-mail: ${token}`,
    };

    // Enviar o e-mail
    transporter.sendMail(mailOptions);

    res.status(200).send('E-mail de validação enviado com sucesso',token);
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao enviar e-mail de validação');
  }
});

// Endpoint para validar o token de e-mail
app.post('/validate-email', async (req, res) => {
  try {
    const { token } = req.body;

    // Verificar o token
    const decoded = jwt.verify(token, 'secreto');

    // Atualizar o status 'verified' no banco de dados
    // Substitua isso pela lógica real de atualização no seu banco de dados
    Exemplo: await db.collection('users').doc(decoded.email).update({ verified: true });

    res.status(200).send('E-mail validado com sucesso');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao validar e-mail');
  }
});

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


// Endpoint para obter posts com nível igual a 0 paginados e filtrados por termo de busca, filtro e ordenação
app.get('/posts', async (req, res) => {
  try {
    const pageSize = parseInt(req.query.page_size) || 10; // Tamanho padrão da página
    const page = parseInt(req.query.page) || 1; // Página padrão
    const searchTerm = req.query.search || ''; // Termo de busca padrão
    
    const orderingFields = req.query.ordering || ''; // Campos de ordenação padrão

    // Construir a consulta
    let query = db.collection('posts').where('level', '==', 0);

    // Aplicar filtro de pesquisa se houver um termo
    if (searchTerm) {
      query = query.where('searchField', '>=', searchTerm).where('searchField', '<=', searchTerm + '\uf8ff');
    }


    // Aplicar ordenação se fornecido
    if (orderingFields) {
      const orderingArray = orderingFields.split(',');
      orderingArray.forEach(field => {
        let order = 'asc';
        if (field.startsWith('-')) {
          order = 'desc';
          field = field.substring(1); // Remover o sinal de menos
        }
        query = query.orderBy(field, order);
      });
    }

    const totalSnapshot = await query.get();

    // Aplicar limites e offset para a paginação
    const snapshot = await query.limit(pageSize).offset((page - 1) * pageSize).get();

    const totalItems = totalSnapshot.docs.length;
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.json({
      total_items: totalItems,
      items: data,
    }).status(200);

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter os dados');
  }
});


// Endpoint para obter posts com nível igual a 1 paginados e filtrados por termo de busca, filtro e ordenação
app.get('/secrets', async (req, res) => {
  try {
    const pageSize = parseInt(req.query.page_size) || 10; // Tamanho padrão da página
    const page = parseInt(req.query.page) || 1; // Página padrão
    const searchTerm = req.query.search || ''; // Termo de busca padrão
    
    const orderingFields = req.query.ordering || ''; // Campos de ordenação padrão

    // Construir a consulta
    let query = db.collection('posts').where('level', '==', 1);

    // Aplicar filtro de pesquisa se houver um termo
    if (searchTerm) {
      query = query.where('searchField', '>=', searchTerm).where('searchField', '<=', searchTerm + '\uf8ff');
    }


    // Aplicar ordenação se fornecido
    if (orderingFields) {
      const orderingArray = orderingFields.split(',');
      orderingArray.forEach(field => {
        let order = 'asc';
        if (field.startsWith('-')) {
          order = 'desc';
          field = field.substring(1); // Remover o sinal de menos
        }
        query = query.orderBy(field, order);
      });
    }

    const totalSnapshot = await query.get();

    // Aplicar limites e offset para a paginação
    const snapshot = await query.limit(pageSize).offset((page - 1) * pageSize).get();

    const totalItems = totalSnapshot.docs.length;
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.json({
      total_items: totalItems,
      items: data,
    }).status(200);

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


