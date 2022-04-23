import firebase from "firebase/app"
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKahkO0Yo1yuPhTdAlkgp5tM8KW5rvMO0",
  authDomain: "vue-todo-7f9b5.firebaseapp.com",
  databaseURL: "https://vue-todo-7f9b5-default-rtdb.firebaseio.com",
  projectId: "vue-todo-7f9b5",
  storageBucket: "vue-todo-7f9b5.appspot.com",
  messagingSenderId: "1018228358243",
  appId: "1:1018228358243:web:2e6fa346db8dec90e0cc56",
  measurementId: "G-2MC093FN9B"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
