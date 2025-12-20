// Suas configurações do Firebase (Uber Moto Conchas)
const firebaseConfig = {
  apiKey: "AIzaSyDmtTBGw2ZxtKaUlbD5BlPgwQO26VFyyzU",
  authDomain: "ubermotoconchas.firebaseapp.com",
  projectId: "ubermotoconchas",
  storageBucket: "ubermotoconchas.firebasestorage.app",
  messagingSenderId: "697414710628",
  appId: "1:697414710628:web:597892e4ba169fa4de7671",
  measurementId: "G-3LF6T0KEVF"
};

// --- AQUI ESTÁ O SEGREDO QUE FALTAVA ---

// 1. Inicializa o Firebase com as suas chaves
firebase.initializeApp(firebaseConfig);

// 2. Cria a conexão com o Banco de Dados (Firestore)
// O 'index.html' e o 'motorista.html' procuram por essa variável 'db'
const db = firebase.firestore();
