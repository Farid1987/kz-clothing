import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDXUEt22bI-9qeMpV720b4Gxvy2J6CnBps",
  authDomain: "kz-clothing.firebaseapp.com",
  databaseURL: "https://kz-clothing.firebaseio.com",
  projectId: "kz-clothing",
  storageBucket: "kz-clothing.appspot.com",
  messagingSenderId: "708983593434",
  appId: "1:708983593434:web:d2149be263886dc1",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
