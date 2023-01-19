"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich", "bin", "Poison","Panic","Yvy"));
// function getSentence(word1,word2,word3,word4,word5) {
//     const GAP = " ";
//     const PUNCT = ".";
//         let str = word1 + GAP + word2 + GAP + word3 + GAP + word4 +GAP+ word5 + PUNCT;
//         return str;
//     }
    

let arr;
arr =[];
arr = [2,7,11,4];
arr = [true,false,true];
arr = ["Ich","bin","Yvonne","Schubert"];


output(arr);
output(arr.length);
output(arr[0]);
output(arr[2]);

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


