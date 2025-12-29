// Firebase SDK (compat, aman untuk WebView)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_7XRkaGbP4tLISCAZwnvQdx2Doa6lbrc",
  authDomain: "block-90d40.firebaseapp.com",
  projectId: "block-90d40",
  storageBucket: "block-90d40.appspot.com",
  messagingSenderId: "552887299452",
  appId: "1:552887299452:web:c0769403af5f6abc7388f9",
  measurementId: "G-JMDQLHQVM0"
};

// Init Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
