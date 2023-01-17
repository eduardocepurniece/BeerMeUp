const hide = document.querySelector("#singUp");
const alreadyHaveAccount = document.querySelector("#alreadyHaveAccount");

hide.addEventListener('click', (event) => {
  document.getElementById("loginBox").classList.add("hiddenClass");
  document.getElementById("singUpBox").classList.remove("hiddenClass");
});

alreadyHaveAccount.addEventListener('click', (event) => {
  document.getElementById("loginBox").classList.remove("hiddenClass");
  document.getElementById("singUpBox").classList.add("hiddenClass");
});
