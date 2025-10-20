const text = "BART VAN NIMWEGEN";
const title = "Bart van Nimwegen";
const typedText = document.getElementById("typedText");
const cursor = document.getElementById("cursor");
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

setTimeout(type, 400);
document.title = "_";
