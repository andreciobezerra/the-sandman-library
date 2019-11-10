let firebaseConfig = {
  apiKey: "AIzaSyA2BSQadnCuL4Q2uZXadB2wc4Uyc6YF6Dw",
  authDomain: "the-sandman-project.firebaseapp.com",
  databaseURL: "https://the-sandman-project.firebaseio.com",
  projectId: "the-sandman-project",
  storageBucket: "the-sandman-project.appspot.com",
  messagingSenderId: "734056077235",
  appId: "1:734056077235:web:a5ba667f89bde5eac5ddc6"
};

/* Initialize Firebase */
firebase.initializeApp(firebaseConfig)

let firestore= firebase.firestore()

export { firestore }