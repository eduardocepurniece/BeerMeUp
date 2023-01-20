const submitNewEntry = document.querySelector("#submitNewEntry");

  submitNewEntry.addEventListener('click', (event) => {
    console.log('x');
    const newEntry = document.getElementById("newEntryText").value;
    console.log(newEntry);
    const newP = document.createElement("p");
    const node = document.createTextNode(newEntry);
    newP.appendChild(node);

    const element = document.getElementById("entries");
    element.appendChild(newP);

    window.location.href="home.html";
    console.log('x');
    });

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
