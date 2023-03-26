import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMQ4Vy-ecUPH9LbBjj9uuryV6YTfUMc70",
  authDomain: "netflix-clone-73972.firebaseapp.com",
  projectId: "netflix-clone-73972",
  storageBucket: "netflix-clone-73972.appspot.com",
  messagingSenderId: "639423774851",
  appId: "1:639423774851:web:7130ee999825e237fa5bb6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
