let letter1 = '@';
let letterSpace = ' ';
let letterPunct = '.';
let textDiv = '';

function updateView() {
    let html = /*HTML*/ `
    <div>${textDiv}</div>
    <input type="text" placeholder="Enter your email">
    <button onclick="submit(this.previousElementSibling)">Login</button>
    `
    document.getElementById('app').innerHTML = html;
}

function submit(inputString) {
    input = inputString.value;

    let indexOfLetter1 = input.indexOf(letter1);
    let indexOfLetter2 = input.indexOf(letterPunct);

    let containLetter1 = input.includes(letter1);
    let containLetter2 = input.includes(letterPunct);

    let containSpace = input.includes(letterSpace)

    if (
        containLetter1 && containLetter2 && !containSpace &&
        indexOfLetter1 < indexOfLetter2 &&
        indexOfLetter2 - indexOfLetter1 > 1
    ) {
        textDiv = "Login successful!";
    } else {
        textDiv = "Input is not valid! Must include '@', '.', and no spaces.";
    }
    updateView();
}