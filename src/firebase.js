import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAds5APZ3ZP9h2DXwmInoO3MiQgX6JRJdg",
    authDomain: "todolist-cfa13.firebaseapp.com",
    databaseURL:"",
    projectId: "todolist-cfa13",
    storageBucket: "todolist-cfa13.appspot.com",
    messagingSenderId: "672808171428",
    appId: "1:672808171428:web:ce0696c5e51f7389687331",
    measurementId: "G-PET47RQEQK"
});

export default app;