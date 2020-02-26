var NumberOfWords = 20
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://enrt.eu/1L1qJmw"
words[2] = "https://enrt.eu/9PaK"
words[3] = "https://enrt.eu/0TY35"
words[4] = "https://enrt.eu/rGky"
words[5] = "https://enrt.eu/XAyl"
words[6] = "https://enrt.eu/ZOLlC"
words[7] = "https://enrt.eu/5gmnM"
words[8] = "https://enrt.eu/NUcz"
words[9] = "https://enrt.eu/sNQ8u5"
words[10] = "https://enrt.eu/uJHNtBYT"
words[11] = "https://enrt.eu/ruxbs"
words[12] = "https://enrt.eu/n8ldytXZ"
words[13] = "https://enrt.eu/6BbSou"
words[14] = "https://enrt.eu/G1RqI3"
words[15] = "https://enrt.eu/tGaO"
words[16] = "https://enrt.eu/lkop3b"
words[17] = "https://enrt.eu/ILvBN"
words[18] = "https://enrt.eu/1CQA"
words[19] = "https://enrt.eu/GM6fiB"
words[20] = "https://enrt.eu/jqZYd3RY"

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
