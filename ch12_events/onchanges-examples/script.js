function changeCountry() {
  let select = document.getElementById("colorSelect");
  let chosenColor = select.value;
  let box = document.getElementById("colorBox");

  if (chosenColor) {
    box.style.backgroundColor = chosenColor;
    box.textContent =
      chosenColor.charAt(0).toUpperCase() + chosenColor.slice(1);
  } else {
    box.style.backgroundColor = "lightgray";
    box.textContent = "Box";
  }
}
