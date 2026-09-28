import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJCQrz-ph3OOdd5jce2BN2O-kTJ1k-Djs",
    authDomain: "wallet-fc805.firebaseapp.com",
    projectId: "wallet-fc805",
    storageBucket: "wallet-fc805.firebasestorage.app",
    messagingSenderId: "606089171556",
    appId: "1:606089171556:web:6b20eaf1ec2957af06c571"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
