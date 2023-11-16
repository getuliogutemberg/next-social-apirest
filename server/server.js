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
// Endpoint para obter todos os itens do banco de dados
app.get('/api/itens', async (req, res) => {
  const snapshot = await db.collection('users').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(data);
});