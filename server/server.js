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
const serviceAccount = require('../next-social-app-a9933-firebase-adminsdk-9kw8q-b8763954a7.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const db = firebaseAdmin.firestore();

// Rota inicial
app.get('/', (req, res) => {
  const apiInstructions = {
    message: "Bem-vindo à APIREST - Capybaquigrafo",
    instructions: "Esta é uma API REST que oferece recursos para...",
    routes: {
      getAllData: {
        description: "Obter todos os dados",
        method: "GET",
        endpoint: "/api/data",
      },
      getDataById: {
        description: "Obter dados por ID",
        method: "GET",
        endpoint: "/api/data/:id",
      },
      addData: {
        description: "Adicionar novos dados",
        method: "POST",
        endpoint: "/api/data",
      },
      updateData: {
        description: "Atualizar dados existentes por ID",
        method: "PUT",
        endpoint: "/api/data/:id",
      },
      deleteData: {
        description: "Excluir dados por ID",
        method: "DELETE",
        endpoint: "/api/data/:id",
      },
    }
  };

  res.json(apiInstructions);
});




// Outras configurações do servidor...

app.listen(PORT, () => {
  console.log('Servidor está ouvindo na porta :' + PORT);
});

// Endpoint para obter todos os itens do banco de dados
app.get('/api/itens', async (req, res) => {
  const snapshot = await db.collection('users').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(data);
});