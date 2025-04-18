const fixedText = "Welcome to ";
const word1 = "Dhaba";
const word2 = "Restaurant";
let isDeleting = true;
let currentWord = word1;
let index = currentWord.length;

const textEl = document.getElementById("text");

function loop() {
  let dynamicPart = currentWord.substring(0, index);
  textEl.textContent = fixedText + dynamicPart;

  if (isDeleting) {
    index--;
    if (index < 0) {
      isDeleting = false;
      currentWord = (currentWord === word1) ? word2 : word1;
      index = 0;
      setTimeout(loop, 500); 
      return;
    }
  } else {
    index++;
    if (index > currentWord.length) {
      isDeleting = true;
      setTimeout(loop, 1000); 
      return;
    }
  }

  setTimeout(loop, 150); 
}

loop();