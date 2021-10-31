var firebaseConfig = {
      apiKey: "AIzaSyD0MumP0mf90NRIT453ydSagW8E4hROy5s",
      authDomain: "kwitter-website-ee0a0.firebaseapp.com",
      databaseURL: "https://kwitter-website-ee0a0-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-ee0a0",
      storageBucket: "kwitter-website-ee0a0.appspot.com",
      messagingSenderId: "772067921455",
      appId: "1:772067921455:web:21c17684a697d9784e00da"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class = 'room_name' id=" + Room_names + "omclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
        });
      });
    }
    getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose :"adding room name"

});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}



function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
}