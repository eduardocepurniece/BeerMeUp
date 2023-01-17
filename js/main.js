const hide = document.querySelector("#singUp");
hide.addEventListener('click', (event) => {
  console.log("click!");
  var element = document.getElementById("theBox");
  element.classList.toggle("hiddenClass");
});

