// Strings and Associative Arrays
// To_do_1

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str){
    var letterArray = [];
    var wordArray = str.split(" ");
    console.log(wordArray);
    for(var i = 0; i<wordArray.length; i++){
        console.log(wordArray[i][0]);
        letterArray += wordArray[i][0];
    }
    return letterArray.toUpperCase();
}

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function rss(str, val){
    var strArr=str.split(' ');
    for(var i=strArr.length-1; i>=0; i--){
        if(strArr[i].length<val){
            for(var j=i; j<strArr.length-1; j++){
            var temp = strArr[i];
            strArr[i] = strArr[i+1];
            strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}