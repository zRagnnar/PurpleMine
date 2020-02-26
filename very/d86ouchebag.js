var NumberOfWords = 20
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://throwbin.io/7kDTKtx"
words[2] = "https://throwbin.io/lmzXshz"
words[3] = "https://throwbin.io/C0LjapH"
words[4] = "https://throwbin.io/PJkaXMD"
words[5] = "https://throwbin.io/tVywqU4"
words[6] = "ttps://throwbin.io/6gKI226"
words[7] = "https://throwbin.io/1aIuIud"
words[8] = "https://throwbin.io/AMXfVZS"
words[9] = "https://throwbin.io/NFguiC2"
words[10] = "https://throwbin.io/hOjUiDU"
words[11] = "https://throwbin.io/I4QyHJG"
words[12] = "https://throwbin.io/64Gwtg6"
words[13] = "ttps://throwbin.io/RW8uHhH"
words[14] = "https://throwbin.io/HVL3b21"
words[15] = "https://throwbin.io/0D92pur"
words[16] = "https://throwbin.io/9gpzzxx"
words[17] = "https://throwbin.io/VWIDDyj"
words[18] = "https://throwbin.io/XZPEBeg"
words[19] = "https://throwbin.io/w2qo9eY"
words[20] = "https://throwbin.io/SPaCecJ"

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
