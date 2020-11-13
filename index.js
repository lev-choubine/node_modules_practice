const {favoriteFoods} = require("./nodeModule");
favoriteFoods.forEach(e => console.log(e));
//first half of the assignment
//////////////////////////////////////////////
const MicroSpellingCorrecter = require('micro-spelling-correcter');// corrects spelling of a single word
const chalk = require('chalk');// changes font propeties on console.log
var words = require('an-array-of-english-words')// imports an array of over 200K english words to check our spelling

let yourSentence;//accumulator

///Text CORRECTION/////
let index = Math.floor(Math.random() * 2);
//randomly passing a spelling error
if(index < 1){
  yourSentence = "you are beaitiful"
  
}else{
  yourSentence ="you are beautiful"

}


// we will break down the string into an array to sorth through it's elements and correct speeling of each word
function myFunction() {

  res = yourSentence.split(" ");
  return res;
}

myFunction();


// spell correct option
 
let correcter = new MicroSpellingCorrecter(
    words,
    9// target maximum distance, defaults to 2
)
let newSentence = [];
res.forEach(e =>newSentence.push(correcter.correct(e))  );


let compiledSentence = newSentence.join(' ')



if (compiledSentence !== yourSentence){
  console.log(chalk.blue(compiledSentence));// will change color of the font in the console if the spelling has been changed
} else{
  console.log(yourSentence);
}



 




