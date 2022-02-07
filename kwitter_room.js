var firebaseConfig = {
      apiKey: "AIzaSyBiB5wOjwwNCPyAuPV3oEDc4ut5OcR1CN4",
      authDomain: "kwitter-cddfe.firebaseapp.com",
      databaseURL: "https://kwitter-cddfe-default-rtdb.firebaseio.com",
      projectId: "kwitter-cddfe",
      storageBucket: "kwitter-cddfe.appspot.com",
      messagingSenderId: "621997372824",
      appId: "1:621997372824:web:af94120a0686c72d66a7ed"
    };
    
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

 
