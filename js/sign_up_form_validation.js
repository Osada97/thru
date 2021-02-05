 function sign_up_vali(){

        var first_name = document.getElementById("first_name").value.trim();
        var last_name = document.getElementById("last_name").value.trim();
        var user_name = document.getElementById("user_name").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("pw").value.trim();
        var c_password = document.getElementById("cpw").value.trim();
        var error;

        if(first_name == ""){
          document.getElementById("error").innerHTML = "<p>Please Enter First Name</p>";
          error =1;
          return false;
        }
        if(first_name.length >= 30){
          document.getElementById("error").innerHTML = "<p>First Name Must Be Less Than 30 Characters</p>";
          error =1;
          return false;
        }
        if(last_name == ""){
          document.getElementById("error").innerHTML = "<p>Please Enter Last Name</p>";
          error =1;
          return false;
        }
        if(last_name.length >= 60){
          document.getElementById("error").innerHTML = "<p>Last Name Must Be Less Than 30 Characters</p>";
          error =1;
          return false;
        }
        if(user_name == ""){
          document.getElementById("error").innerHTML = "<p>Please Enter User Name</p>";
          error =1;
          return false;
        }
        if(user_name.length >= 30){
          document.getElementById("error").innerHTML = "<p>User Name Must Be Less Than 30 Characters</p>";
          error =1;
          return false;
        }
        if(email == ""){
          document.getElementById("error").innerHTML = "<p>Please Enter Email</p>";
          error =1;
          return false;
        }
        if(email.length >= 90){
          document.getElementById("error").innerHTML = "<p>Email Must Be Less Than 90 Characters</p>";
          error =1;
          return false;
        }
        if(password == ""){
          document.getElementById("error").innerHTML = "<p>Please Enter password</p>";
          error =1;
          return false;
        }
        if(password.length >= 30){
          document.getElementById("error").innerHTML = "<p>Password Must Be Less Than 30 Characters</p>";
          error =1;
          return false;
        }
        if(c_password == ""){
          document.getElementById("error").innerHTML = "<p>Please Enter Confirm Password</p>";
          error =1;
          return false;
        }
        if(c_password.length >= 30){
          document.getElementById("error").innerHTML = "<p>Confirm Password Must Be Less Than 30 Characters</p>";
          error =1;
          return false;
        }
        if(password != c_password){
          document.getElementById("error").innerHTML = "<p>Confirm Password Does Not Match</p>";
          error =1;
          return false;
        }

        if (error == null) {
          alert("Sign Up Successful ");
        }

    }