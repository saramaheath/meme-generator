let formElement = document.getElementById("meme-form");
let topText = document.getElementById("top-text");
let bottomText = document.getElementById("bottom-text");
let imageInput = document.getElementById("image-input");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  addMeme(imageInput.value, topText.value, bottomText.value);
  formElement.reset();
});

function addMeme(img, top, bottom) {
  let meme = document.querySelector(".first-container"); //main parent container
  let newMemeContainer = document.createElement("DIV");
  newMemeContainer.className = "container";
  let newMemeImg = document.createElement("IMG"); //child
  newMemeImg.src = img;
  newMemeImg.width = 500;
  newMemeImg.className = "input-img";
  let newMemeTopText = document.createElement("P"); //child
  newMemeTopText.innerText = top;
  newMemeTopText.className = "top";
  let newMemeBotText = document.createElement("P"); //child
  newMemeBotText.innerText = bottom;
  newMemeBotText.className = "bottom";
  let removeButton = document.createElement("BUTTON");
  removeButton.className = "button";
  removeButton.textContent = "remove";

  removeButton.addEventListener("click", function () {
    console.log("you clicked the button");
    newMemeContainer.remove();
  });

  meme.appendChild(newMemeContainer);
  newMemeContainer.appendChild(newMemeImg);
  newMemeContainer.appendChild(newMemeTopText);
  newMemeContainer.appendChild(newMemeBotText);
  newMemeContainer.appendChild(removeButton);
}
