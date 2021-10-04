

const string = "Привет! Как дела?";
const vowels = "аейиуыоэюяeyuoiya";
var newVowels = " ";

function getVowels(str) {
    for(i=0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase())) {
            newVowels +=str[i]
        } 
    }
    return newVowels
}
console.log(getVowels(string))
