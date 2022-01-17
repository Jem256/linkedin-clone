import firebase from 'firebase';
// import 'firebase/auth';    
// import 'firebase/storage';    
// import 'firebase/database';   
// import 'firebase/firestore';  
// import 'firebase/messaging';  
// import 'firebase/functions';  

const firebaseConfig = {
  apiKey: "AIzaSyDWxrxD3xp0o6-w-6wLgye4BBfecaqCM04",
  authDomain: "linkedin-clone-3239c.firebaseapp.com",
  projectId: "linkedin-clone-3239c",
  storageBucket: "linkedin-clone-3239c.appspot.com",
  messagingSenderId: "61270819565",
  appId: "1:61270819565:web:e9bba2a93470f362e7c2e4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;