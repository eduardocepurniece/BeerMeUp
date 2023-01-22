const newEntry = document.querySelector("#newEntry");
const submitNewEntry = document.querySelector("#submitNewEntry");
let globalKeyCounter = 100000;

//Hide submitEntryPage
newEntry.addEventListener('click', (event) => {
    document.getElementById("homePage").classList.add("hiddenClass");
    document.getElementById("submitEntryPage").classList.remove("hiddenClass");
});


submitNewEntry.addEventListener('click', (event) => {
    const newEntryTitle = document.getElementById("newEntryTitle").value;
    const newEntryPicture = document.getElementById("newEntryPicture").files[0];
    const newEntryText = document.getElementById("newEntryText").value;

    //Save picture to local storage
    var reader = new FileReader()
    reader.onload = function(base64) {
      localStorage["newEntryPicture"] = base64;
    }
    reader.readAsDataURL(newEntryPicture);
    //
    const newEntry = new Entry(globalKeyCounter, newEntryTitle, newEntryPicture, newEntryText, '0');
    globalKeyCounter = globalKeyCounter + 1; 
    console.log(newEntryPicture);

    const newP = document.createElement("p");
    const node = document.createTextNode(newEntryText);
    newP.appendChild(node);

    const element = document.getElementById("entries");
    element.appendChild(newP);

    document.getElementById("homePage").classList.remove("hiddenClass");
    document.getElementById("submitEntryPage").classList.add("hiddenClass");
});

// Entry object constructor
function Entry(key, beerName, pictureDir, description, date){
    this.key = key;
    this.beerName = `${key}${beerName}`;
    this.pictureDir = `${key}${pictureDir}`;
    this.desctription = `${key}${description}`;
    this.date = `${key}${date}`;
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
