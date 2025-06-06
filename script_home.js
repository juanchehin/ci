// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRW0UV2Yx50RfC9-HcOLNFse2UMsyg83c",
    authDomain: "ci-vistas-home.firebaseapp.com",
    projectId: "ci-vistas-home",
    storageBucket: "ci-vistas-home.firebasestorage.app",
    messagingSenderId: "247824107618",
    appId: "1:247824107618:web:d566cae48da6fe3235693b",
    measurementId: "G-MVN2SJCRFX"
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