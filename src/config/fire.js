import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXk8ljSKDo7g_nz5Co9HxfB4L9FmyZjcY",
    authDomain: "movie-app-47690.firebaseapp.com",
    databaseURL: "https://movie-app-47690.firebaseio.com",
    projectId: "movie-app-47690",
    storageBucket: "movie-app-47690.appspot.com",
    messagingSenderId: "1089100818608",
    appId: "1:1089100818608:web:76d01e65e83e134f8cf375",
    measurementId: "G-PXH1DV40N0"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;