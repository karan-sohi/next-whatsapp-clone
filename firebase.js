import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCt6cZ-XJelOb4y5qeyq6Vs1qilsOEGZUc",
  authDomain: "next-whatsapp-clone-ab224.firebaseapp.com",
  projectId: "next-whatsapp-clone-ab224",
  storageBucket: "next-whatsapp-clone-ab224.appspot.com",
  messagingSenderId: "918244001138",
  appId: "1:918244001138:web:85a183aed8a283ec8fc9eb",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
