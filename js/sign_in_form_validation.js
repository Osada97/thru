 function sign_in_vali(){
    
    var user_name = document.getElementById("email");
    var password = document.getElementById("pw");
    var error;

    user_name = user_name.value.trim();
    password = password.value.trim();

      if (user_name == "") {
        document.getElementById("error").innerHTML = "<p>Please Enter Email Address</p>";
        error = 1;
        return false;
      }

      if(user_name.length >= 100){
        document.getElementById("error").innerHTML = "<p>Email Address Must Be Less Than 100 Characters</p>";
        error = 1;
        return false;
      }

      if(password == ""){
        document.getElementById("error").innerHTML = "<p>Please Enter Password</p>";
        error = 1;
        return false;
      }
      if(password.length >= 30){
        document.getElementById("error").innerHTML = "<p>Password Must Be Less Than 30 Characters</p>";
        error = 1;
        return false;
      }
      if (error==null) {
        alert("Sign In Successful..");
      }
      
  }