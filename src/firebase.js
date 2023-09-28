import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2aUJhjRhrE-l3mi8QRiE_b38F9hVT_xc",
  authDomain: "blog-application-da1c6.firebaseapp.com",
  databaseURL: "https://blog-application-da1c6-default-rtdb.firebaseio.com",
  projectId: "blog-application-da1c6",
  storageBucket: "blog-application-da1c6.appspot.com",
  messagingSenderId: "697774882345",
  appId: "1:697774882345:web:b088d0c17f0d219ac52638",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
