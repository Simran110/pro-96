const firebaseConfig = {
      apiKey: "AIzaSyC2dWi3Fyv1hP-MsEhp1cwtnSugHW0z91M",
      authDomain: "euro-school-826cb.firebaseapp.com",
      projectId: "euro-school-826cb",
      storageBucket: "euro-school-826cb.appspot.com",
      messagingSenderId: "814806738452",
      appId: "1:814806738452:web:c2c1edf19662698dda6901",
      measurementId: "G-KCT11T5EV3"
    };
    firebase.initializeApp(firebaseConfig);
    function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(user_name).update({
          purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("room_name="+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

