// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG-vKuaVA03vGL4qicMu0teRAhvCQg_7I",
    authDomain: "ci-vistas.firebaseapp.com",
    projectId: "ci-vistas",
    storageBucket: "ci-vistas.firebasestorage.app",
    messagingSenderId: "636129471511",
    appId: "1:636129471511:web:ef112a163d578565bcc052",
    measurementId: "G-K61D2JM6EH"
  };


// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Obtener la IP del usuario usando ipify
async function getIP() {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
}

// Guardar visita en Firebase
async function registrarVisita() {
    const ip = await getIP();
    const timestamp = new Date();

    db.collection("visitas").add({
        ip: ip,
        fecha: timestamp
    }).then(() => {
        // console.log("Visita registrada con IP: " + ip);
    }).catch(error => {
        // console.error("Error al registrar visita: ", error);
    });
}

registrarVisita();
