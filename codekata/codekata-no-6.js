// codekata no 6
// http://codekata.com/kata/kata06-anagrams/

// http://codekata.com/data/wordlist.txt


//first test

var ord="skinneskidtskraber"
chord=ord.split("")
gist=chord.sort()
console.log(gist)

// funger fint men vil fejle hvis karakter er speciel 

// https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript

var ord="skinneskidtskraber"
chord=[...ord]
gist=chord.sort()
console.log(gist)
