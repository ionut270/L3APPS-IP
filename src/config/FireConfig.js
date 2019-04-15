import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/messaging";

const config = {
  //TODO: create your firebase project and change it with your credentials :D
  apiKey: "AIzaSyAk5pnf2NPWk6RigOXav1p31jkCMdWLU7M",
  authDomain: "reactexe-95988.firebaseapp.com",
  databaseURL: "https://reactexe-95988.firebaseio.com",
  projectId: "reactexe-95988",
  storageBucket: "reactexe-95988.appspot.com",
  messagingSenderId: "589656000685"
};

const firebaseProvider = firebase.initializeApp(config);
export default firebaseProvider;
