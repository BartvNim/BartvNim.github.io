const text = "BART VAN NIMWEGEN";
const title = "Bart van Nimwegen";
const typedText = document.getElementById("typedText");
const cursor = document.getElementById("cursor");
const links = document.querySelectorAll(".links a");
const myLocation = document.getElementById("myLocation");
let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    document.title = title.substring(0, index + 1) + "_";
    index++;
    setTimeout(type, 60);
  } else {
    setTimeout(() => (cursor.style.display = "none"), 600);
    setTimeout(() => (document.title = title), 600);
  }
}

function showLinks() {
  links.forEach((link, i) => {
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.pointerEvents = "auto";
    }, i * 400);
  });
}

setTimeout(type, 400);
document.title = "_";
setTimeout(() => {
  myLocation.classList.add("visible");
}, text.length * 60 + 1200);
setTimeout(showLinks, text.length * 60 + 2700);
