import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDp73li1fRUrN4DKzIcDHEeNM2vtLSTOMk",
    authDomain: "foody-narayanganj.firebaseapp.com",
    projectId: "foody-narayanganj",
    storageBucket: "foody-narayanganj.appspot.com",
    messagingSenderId: "229898235878",
    appId: "1:229898235878:web:cb76cd76cacf81b31cf027"
  };

  const app = ()=>{
    initializeApp(firebaseConfig)
  };
  
  export default app;