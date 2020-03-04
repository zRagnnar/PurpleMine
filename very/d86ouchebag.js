var NumberOfWords = 20
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://stfly.io/6akmu60Mx"
words[2] = "https://stfly.io/OQyY"
words[3] = "https://stfly.io/A4nUud"
words[4] = "https://stfly.io/ggENLtCHI"
words[5] = "https://stfly.io/sZzJeOQO"
words[6] = "https://stfly.io/pCLUGsRyy"
words[7] = "https://stfly.io/tOEzXq"
words[8] = "https://stfly.io/upCfalCs9"
words[9] = "https://stfly.io/JkWIrU"
words[10] = "https://stfly.io/oEmJAtw0"
words[11] = "https://stfly.io/SrRCJ4d"
words[12] = "https://stfly.io/6akmu60Mx"
words[13] = "https://stfly.io/OQyY"
words[14] = "https://stfly.io/A4nUud"
words[15] = "https://stfly.io/ggENLtCHI"
words[16] = "https://stfly.io/sZzJeOQO"
words[17] = "https://stfly.io/tOEzXq"
words[18] = "https://stfly.io/upCfalCs9"
words[19] = "https://stfly.io/JkWIrU"
words[20] = "ttps://stfly.io/oEmJAtw0"

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
