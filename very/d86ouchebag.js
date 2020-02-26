var NumberOfWords = 60
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://enrt.eu/cu21MA"
words[2] = "https://enrt.eu/HDOX2Z4"
words[3] = "https://enrt.eu/xcRW"
words[4] = "https://enrt.eu/Pd07"
words[5] = "https://enrt.eu/g6ZTry"
words[6] = "https://enrt.eu/bk3MqjKU"
words[7] = "https://enrt.eu/HUNXE"
words[8] = "https://enrt.eu/w0OryCEt"
words[9] = "https://enrt.eu/TYtH"
words[10] = "https://enrt.eu/M2TCet"
words[11] = "https://enrt.eu/MDwsx"
words[12] = "https://enrt.eu/jt21R9R"
words[13] = "https://enrt.eu/8ct1"
words[14] = "https://enrt.eu/5BulUe4H"
words[15] = "https://enrt.eu/PitgJ5M"
words[16] = "https://enrt.eu/rjZ3B"
words[17] = "https://enrt.eu/naD1CQt"
words[18] = "https://enrt.eu/LtS25"
words[19] = "https://enrt.eu/y3vK"
words[20] = "https://enrt.eu/7PFp5hTu"
words[21] = "https://enrt.eu/GMDg5"
words[22] = "https://enrt.eu/iuY9lcs"
words[23] = "https://enrt.eu/X6FwKD"
words[24] = "https://enrt.eu/xsa7E8ET"
words[25] = "https://enrt.eu/hLfJukd"
words[26] = "https://enrt.eu/9TOn"
words[27] = "https://enrt.eu/hLfJukd"
words[28] = "https://enrt.eu/pqWAaY"
words[29] = "https://enrt.eu/lfNF"
words[30] = "https://enrt.eu/KipyIz"
words[31] = "https://enrt.eu/ACfPpC"
words[32] = "https://enrt.eu/Malh"
words[33] = "https://enrt.eu/c5cr6"
words[34] = "https://enrt.eu/CK273"
words[35] = "https://enrt.eu/0NLhWvA"
words[36] = "https://enrt.eu/BT8e27"
words[37] = "https://enrt.eu/WcHMPSX"
words[38] = "https://enrt.eu/sBr58Iu"
words[39] = "https://enrt.eu/U61T"
words[40] = "https://enrt.eu/TlMWy"
words[41] = "https://enrt.eu/I4aMD"
words[42] = "https://enrt.eu/vvmHjZpJ"
words[43] = "https://enrt.eu/fesDbA"
words[44] = "https://enrt.eu/1tu8h1Wa"
words[45] = "https://enrt.eu/ZpZt"
words[46] = "https://enrt.eu/DcLfOCE"
words[47] = "https://enrt.eu/XXQEh8j"
words[48] = "https://enrt.eu/9aoSM"
words[49] = "https://enrt.eu/3t5SrH4"
words[50] = "https://enrt.eu/zlavXqnh"
words[51] = "https://enrt.eu/2ByXa"
words[52] = "https://enrt.eu/CdaY9PG"
words[53] = "https://enrt.eu/yt8sxP5q"
words[54] = "https://enrt.eu/6BMEt3m"
words[55] = "https://enrt.eu/3RdA"
words[56] = "https://enrt.eu/P6mBR"
words[57] = "https://enrt.eu/z68l4A"
words[58] = "https://enrt.eu/KpsBN4H"
words[59] = "https://enrt.eu/VmHvaoBE"
words[60] = "https://enrt.eu/u1dENxF"

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