 var firebaseConfig = {
    apiKey: "AIzaSyDZ-rIZCfmFO3XXyyaHq28wqKC0oAhrEm4",
    authDomain: "kwitterfebruary.firebaseapp.com",
    databaseURL: "https://kwitterfebruary-default-rtdb.firebaseio.com",
    projectId: "kwitterfebruary",
    storageBucket: "kwitterfebruary.appspot.com",
    messagingSenderId: "266039138204",
    appId: "1:266039138204:web:d9a5f3b79e0e91a6a59a59",
    measurementId: "G-KKWV0142YQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }