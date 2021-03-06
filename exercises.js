/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    if (a > b){
      return a;
    }else {
      return b;
    }
}
console.assert(max(30, 10) == 30);
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    return Math.max(a, b, c);
}
console.assert(maxOfThree(20, 50, 30) == 50 );
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
      return true;
    }else {
      return false;
    }

}
console.assert(isVowel('a') == true);
console.assert(isVowel('x') == false);
// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var stringArray = phrase.split("");
    var final = "";
    for (var i = 0; i < stringArray.length; i++){

     if (isVowel(stringArray[i]) == true) {
       final += stringArray[i];
     } else {
       final += stringArray[i];
       final += "o";
       final += stringArray[i];

     }
    }

    return final

}
  console.assert(rovarspraket('hello') == 'hohelollolo');
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    var add = array;
    var result = 0;
    for (var i = 0; i < add.length; i++){
    result += add[i];
    }
    return result;
}
console.assert(sum([1, 2, 3, 4]) == 10);

function multiply(array){
    "use strict";
    var add = array;
    var result = 1;
    for (var i = 0; i < add.length; i++){
    result *= add[i];
    }
    return result;
}
console.assert(multiply([1, 2, 3, 4]) == 24);
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
