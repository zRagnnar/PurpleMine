var NumberOfWords = 4
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://shrinkurl.org/8rA0H8r"
words[2] = "https://shrinkurl.org/0jae"
words[3] = "https://shrinkurl.org/rv3ZAZR4"
words[4] = "https://shrinkurl.org/Ja9Y1Jdo"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
