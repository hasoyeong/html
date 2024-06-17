function changeBg(color) {
  const box = document.querySelector(".blank");
  box.style.backgroundColor = color;
}

function openDesc() {
  document.querySelector("#open").style.display = "none";
  document.querySelector("#desc").style.display = "block";
}

function closeDesc() {
  document.querySelector("#desc").style.display = "none";
  document.querySelector("#open").style.display = "block";
}
