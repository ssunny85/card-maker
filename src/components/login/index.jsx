import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './style.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const handleLoginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { credential, user } = result;
        const { accessToken } = credential;
        console.log('accessToken: ', accessToken);
        console.log('user: ', user);
      })
      .catch((error) => {
        console.log('error: ', error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = error.credential;
      });
  };
  return (
    <section className="login">
      <h1>Card Maker</h1>
      <div>
        <button type="button" onClick={handleLoginGoogle}>
          Google LogIn
        </button>
      </div>
    </section>
  );
};

export default Login;
