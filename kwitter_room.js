var firebaseConfig = {
  apiKey: "AIzaSyADTYxYeEzYUjMDfhwtKkCKTNh_78o9E1E",
  authDomain: "kwitterdiv.firebaseapp.com",
  databaseURL: "https://kwitterdiv-default-rtdb.firebaseio.com",
  projectId: "kwitterdiv",
  storageBucket: "kwitterdiv.appspot.com",
  messagingSenderId: "993030692396",
  appId: "1:993030692396:web:7645000e1f54ab50e87b89"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  var room_name = document.getElementById("room_name").value
  console.log(room_name)
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html"

}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}

function logout() {
localStorage.removeItem("room_name")
localStorage.removeItem("user_name")
window.location="index.html"
}
