
let start  = true;
let numWrong = 0;
let secretWords = ["pizza", "popcorn", "pickles", "pie"];
let secretWord = "";
let guesses = 0;
let showWord = "";
function guessIt()
{
    let letter = document.getElementById("letter").value;
    console.log(letter);
}
function initializeTheGame()
{
    // pick a num between 0 - 3
    // formula:
    // Math.floor(Math.random() * (max - min) + min));
    secretWord = secretWords[Math.floor(Math.random() * (secretWords.length))];
    for (let i = 0; i < secretWord.length; i++)
    {
        showWord += "*";
    }
    updateDisplay();
}
function updateDisplay()
{
    let res = document.getElementById("results");
    let oStr = ``;
    oStr += `<span style='color:blue'> Word:${showWord} </span>`;
    oStr += `<span style='color:blue'> NWrong: ${guesses} </span>`;
    oStr += `<span style='color:blue'> DEBUG WORD: ${secretWord} </span>`;
    res.innerHTML = oStr;
}