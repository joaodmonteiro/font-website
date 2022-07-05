let word = document.querySelector("#word");
let inputText = document.querySelector(".inputText");

console.log(word.children[0]);

setTimeout(() => {
  animateChar(0);
}, 200);

function animateChar(index) {
  word.children[index].classList.add("animated");

  setTimeout(() => {
    word.children[index].classList.remove("animated");
  }, 300);

  if (index < word.children.length - 1) {
    setTimeout(() => {
      animateChar(index + 1);
    }, 100);
  }
}

document.addEventListener("keyup", function () {
  word.innerHTML = "";

  for (let i = 0; i < inputText.value.length; i++) {
    let char = document.createElement("li");
    char.textContent = inputText.value[i];
    word.appendChild(char);
  }
});
