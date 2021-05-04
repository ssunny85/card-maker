import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Login from './components/login';
import './App.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_API_KEY}.firebaseapp.com`,
  projectId: process.env.REACT_APP_API_KEY,
  storageBucket: `${process.env.REACT_APP_API_KEY}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
firebase.initializeApp(firebaseConfig);

const App = () => (
  <div className="app">
    <Login />
  </div>
);

export default App;
