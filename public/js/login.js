$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var userNameInput = $("input#userName-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an userName and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      userName: userNameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.userName || !userData.password) {
      return;
    }

    // If we have an userName and password we run the loginUser function and clear the form
    loginUser(userData.userName, userData.password);
    userNameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(userName, password) {
    $.post("/api/login", {
      userName: userName,
      password: password
    }).then(function(data) {
      console.log("data ", data);
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});
