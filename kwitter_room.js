
var firebaseConfig = {
      apiKey: "AIzaSyCqTLlv3BDyMbYRJaHeNDFC_n54mbJRlic",
      authDomain: "viper-chats.firebaseapp.com",
      projectId: "viper-chats",
      storageBucket: "viper-chats.appspot.com",
      messagingSenderId: "172361688731",
      appId: "1:172361688731:web:ae754cac7e2bbc5592083e",
      measurementId: "G-7STY1KEZ7K"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
