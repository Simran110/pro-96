//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
message_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
name_with_tag="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_Like=Number(likes)+1;
      console.log(updated_Like);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_Like
      });
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}