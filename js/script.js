
// show password hide password function
showpassword =()=>{
    
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("icon").innerHTML = ' <i class="fa-solid fa-eye-slash" onclick="showpassword()"></i>'
    } else {
      x.type = "password";
      document.getElementById("icon").innerHTML = ' <i class="fa-regular fa-eye" onclick="showpassword()"></i>'
    }
}


// toastify function
function alertfu(msg){
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

// Simple loge in function form validation

login = () =>{
  let username = document.getElementById("username").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  console.log(username.length);
  if( username === "" || username.length<3){
    return alertfu("Please Enter User Name")
  }
  if( email!=="admin@gmail.com"){
    return alertfu("Please Enter Email : admin@gmail.com")
  }
  if(password !== "12345"){
    return  alertfu("Please Enter password : 12345")
  }
  if(username !== "" && username.length >=3 && email ==="admin@gmail.com" && password === "12345" ){
    window.location.href="../home.html";
    document.getElementById("heading").innerHTML ="welcome "+ {username};
    console.log("ijjaz");
  }
}



// home page js

// clear function 
document.getElementById("clear").onclick = function () {
    document.getElementById("input").value = "";
  }
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("outputs").innerHTML = "";
  }
   


  let cities = ["faisalabad", "Lahore", "Karachi", "Multan", "Bahawalpur"]
  //  print all city
function city(){
    document.getElementById("outputs").innerHTML = " ";
    for (i = 0; i < cities.length; i++) {
      let num = i + 1
      document.getElementById("outputs").innerHTML += num + ")" + " " + cities[i] + " " + "<br>"
    }
  }


//  add cityname 
function addcity() {
    let newCity = document.getElementById("input").value;
    if (!newCity) {
      alertfu("please enter city name correctly")
      return;
    }
    newCityFirstLetter = newCity.charAt(0).toUpperCase();
    newCityAllLetters = newCity.slice(1).toLowerCase();
    newCityInCapitalize = newCityFirstLetter + newCityAllLetters;
  
    let cityFound = false;
    for (i = 0; i < cities.length; i++) {
      if (cities[i] === newCityInCapitalize) {
        cityFound = true;
        document.getElementById("outputs").innerHTML = "<span style='color:red'>" + "&quot" + newCityInCapitalize + "&quot" + '</span>' + " is already in cities list"
      }
    }
  
    if (cityFound === false) {
      cities.push(newCityInCapitalize);
      document.getElementById("outputs").innerHTML = "<span style='color:green'>" + newCityInCapitalize + "&quot" + '</span>' + " has been successfully added into the list"
  
      document.getElementById("city").onclick = function () {
        document.getElementById("outputs").innerHTML = " "
        for (i = 0; i < cities.length; i++) {
          num = i + 1;
          document.getElementById("outputs").innerHTML += num + ")" + " " + cities[i] + "<br>"
        }
      }
  
    }
  }
  
let username = document.getElementById("username").value