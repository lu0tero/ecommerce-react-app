import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANlnHVafo8hnvrNOmQvHBEZ6feYTIeOwk",
  authDomain: "coderhouse-ecommerce-e0fd9.firebaseapp.com",
  projectId: "coderhouse-ecommerce-e0fd9",
  storageBucket: "coderhouse-ecommerce-e0fd9.appspot.com",
  messagingSenderId: "416919225596",
  appId: "1:416919225596:web:b6188d7352e93e87a7c379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
