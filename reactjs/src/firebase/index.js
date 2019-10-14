import firebase from "firebase";
import { firebaseAppConfig } from "../config.js";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp(firebaseAppConfig);

export default firebaseApp;