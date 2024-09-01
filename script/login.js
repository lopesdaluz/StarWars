const userName = "tatiana";
const passWord = "helloWorld";

const userInput = document.querySelector(".userName");
const passwordInput = document.querySelector(".passWord");

const logInBtn = document.querySelector(".LogInButton");
const loginMessage = document.querySelector(".loginMessage");

logInBtn.addEventListener("click", () => {
  if (userName == userInput.value) {
    console.log(userName);
    if (passWord == passwordInput.value) {
      console.log(passWord);
      // alert("You are now logged in");
      loginMessage.textContent = "you are now being logged in";
      setTimeout(() => {
        window.location.href = "starwars.html";
      }, 2000);
    } else {
      console.log("wrong password");
    }
  } else {
    console.log("Wrong user name");
  }
});
