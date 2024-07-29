let word = 'Asanda';

function scrambleWord(word) {
    let originalWord = word;
    let scrambledWord = '';

for (let i = 0; i < originalWord.length; i++) {
     console.log(`original word: ${word}`);
    let randomIndex = Math.floor(Math.random() * originalWord.length);
    let randomLetter = originalWord.charAt(randomIndex);

    scrambledWord += randomLetter;
   console.log( scrambledWord);

    originalWord = originalWord.substring(0, randomIndex) + originalWord.substring(randomIndex + 1);

    console.log(`remaining word: ${originalWord}`);
}

return scrambledWord;

}

let result = scrambleWord(word);
console.log(`Final result: ${result}`); 

