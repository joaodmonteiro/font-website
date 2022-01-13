let word = document.querySelector('#word');
let inputText = document.querySelector('.inputText');

document.addEventListener("keyup", function() {
    word.innerHTML = "";

    for(let i=0; i<inputText.value.length; i++)
    {
        let char = document.createElement('li');
        char.textContent = inputText.value[i];
        word.appendChild(char);
    }
});