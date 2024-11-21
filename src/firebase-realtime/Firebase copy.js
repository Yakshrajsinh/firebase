// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ZjtfcRpslmXgLGXFD20v75UHmuvazvU",
  authDomain: "fir-project-322ce.firebaseapp.com",
  projectId: "fir-project-322ce",
  storageBucket: "fir-project-322ce.appspot.com",
  messagingSenderId: "258018324546",
  appId: "1:258018324546:web:712a53338eb29ee7487ddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db