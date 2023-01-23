const newEntry = document.querySelector("#newEntry");
const submitNewEntry = document.querySelector("#submitNewEntry");
let globalKeyCounter = 100000;
let entries = JSON.parse(localStorage.getItem("entries") || "[]");
if(!entries){
  entries = [];
}
appendEntries(entries);

//Hide submitEntryPage
newEntry.addEventListener('click', (event) => {
    document.getElementById("homePage").classList.add("hiddenClass");
    document.getElementById("submitEntryPage").classList.remove("hiddenClass");
});


submitNewEntry.addEventListener('click', (event) => {
    const newEntryTitle = document.getElementById("newEntryTitle").value;
    const newEntryPicture = document.getElementById("newEntryPicture").files[0];
    let pictureURL = "";
    const newEntryText = document.getElementById("newEntryText").value;
    
    //Save picture to local storage
    let reader = new FileReader()
    reader.readAsDataURL(newEntryPicture);
    reader.addEventListener('load', () => {
      pictureURL += reader.result;
      const newEntry = new Entry(globalKeyCounter, newEntryTitle, pictureURL, newEntryText, '0');
      console.log(newEntry);
      entries.push(newEntry);
      console.log(entries);
    });
    //create new entry and saves it in array of entries
    
    globalKeyCounter = globalKeyCounter + 1; 

    //Save array of entries to localStorage
    localStorage.setItem("entries", JSON.stringify(entries));
    //console.log(entries);
    

    document.getElementById("homePage").classList.remove("hiddenClass");
    document.getElementById("submitEntryPage").classList.add("hiddenClass");
});


//Read array and provide output to html
function appendEntries(objectArray){
  objectArray.forEach(element => {
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("p");
    const newPicture = document.createElement("img");
    const newDescription = document.createElement("p");

    const titleNode = document.createTextNode(element.beerName);
    const descriptionNode = document.createTextNode(element.description);
    console.log(element.picture);
    newPicture.src = element.pictureDir;

    newTitle.appendChild(titleNode);
    newDescription.appendChild(descriptionNode);

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newPicture);
    newDiv.appendChild(newDescription);

    const mainDiv = document.getElementById("entries");
    mainDiv.appendChild(newDiv);
  });    
}
// Entry object constructor
function Entry(key, beerName, pictureDir, description, date){
    this.key = key;
    this.beerName = beerName;
    this.pictureDir = pictureDir;
    this.desctription = description;
    this.date = date;
}

/*

//Add pictures code:
    const input = document.querySelector("input")
    const output = document.querySelector("output")
    let imagesArray = []

    input.addEventListener("change", function() {
        const file = input.files
        imagesArray.push(file[0])
        displayImages()
    });

    function displayImages() {
        let images = ""
        imagesArray.forEach((image, index) => {
            images += `<div class="image">
            <img src="${URL.createObjectURL(image)}" alt="image">
            <span onclick="deleteImage(${index})">&times;</span>
          </div>`
        })
        output.innerHTML = images
    }

      function deleteImage(index) {
        imagesArray.splice(index, 1)
        displayImages()
      }
*/
