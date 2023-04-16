    const firebaseConfig = {
    apiKey: "AIzaSyAwlMCjkP5N9cikfLNrCVxP2bLDei5Hu34",
    authDomain: "samekhdata.firebaseapp.com",
    databaseURL: "https://samekhdata-default-rtdb.firebaseio.com",
    projectId: "samekhdata",
    storageBucket: "samekhdata.appspot.com",
    messagingSenderId: "340185869953",
    appId: "1:340185869953:web:b39ac9735fc99c35592780",
    measurementId: "G-S97RJ5MSKJ"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
  
  const loginScreen = () => window.location.href = "./index.html";
