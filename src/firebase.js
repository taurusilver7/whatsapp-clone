import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwcFxL2NhxU_gwzD4mJU3mboSpq-aTgJM",
  authDomain: "whatsapp-14fc6.firebaseapp.com",
  projectId: "whatsapp-14fc6",
  storageBucket: "whatsapp-14fc6.appspot.com",
  messagingSenderId: "394039563770",
  appId: "1:394039563770:web:308e9669aa092040b34043",
  measurementId: "G-E030F8JFFQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
