import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClZqUxzBz2OPQU6IkJ7Bh7O8SoC4pP2W8",
  authDomain: "blog-updated-d2452.firebaseapp.com",
  projectId: "blog-updated-d2452",
  storageBucket: "blog-updated-d2452.appspot.com",
  messagingSenderId: "295082986078",
  appId: "1:295082986078:web:004ef801dfed5189bac2cf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
