import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBnv0URoyGiPJ5Lu8HghJkmz6Ay2mMVyMM",
  authDomain: "foodstore-991b6.firebaseapp.com",
  projectId: "foodstore-991b6",
  storageBucket: "foodstore-991b6.appspot.com",
  messagingSenderId: "802995431977",
  appId: "1:802995431977:web:b3df2548769f209413ca38"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app