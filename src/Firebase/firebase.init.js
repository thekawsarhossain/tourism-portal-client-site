import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthntication = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthntication;