import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA8DFX74B5cebTlWNMMB1Ktjq6ySBccU30",
  authDomain: "frothin-weirdos.firebaseapp.com",
  databaseURL: "https://frothin-weirdos.firebaseio.com",
  projectId: "frothin-weirdos",
  storageBucket: "frothin-weirdos.appspot.com",
  messagingSenderId: "666117467055",
  appId: "1:666117467055:web:0558f83f499c00b18a5d5a",
  measurementId: "G-JEF60TG9YQ"
  };

firebase.initializeApp(config);
export default firebase;