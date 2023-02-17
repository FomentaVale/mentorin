import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD1-7q-3bi7Umulug53B0VmanLiZqBkwm4",
  authDomain: "auth-mentorin.firebaseapp.com",
  projectId: "auth-mentorin",
  storageBucket: "auth-mentorin.appspot.com",
  messagingSenderId: "867955646645",
  appId: "1:867955646645:web:1d445e924ef8dc3f18defc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

/* Configurações do firebase para utilizar na função de login com o google */