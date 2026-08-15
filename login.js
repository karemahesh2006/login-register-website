const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");

const password = document.getElementById("password");

const message = document.getElementById("message");

const showPassword = document.getElementById("showPassword");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const usernameValue = username.value.trim();

    const passwordValue = password.value.trim();


    if (usernameValue === "") {

        message.textContent = "Please enter your username.";

        username.focus();

        return;
    }


    if (passwordValue === "") {

        message.textContent = "Please enter your password.";

        password.focus();

        return;
    }
 
    message.textContent = "Login information entered successfully!";
    message.style.color="green";
});
showPassword.addEventListener("click", function() {

    if (password.type === "password") {

        password.type = "text";
        showPassword.textContent = "Hide";

    } else {

        password.type = "password";
        showPassword.textContent = "Show";

    }

});