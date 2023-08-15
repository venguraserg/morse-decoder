const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
// const expres = "000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110";
function decode(expr) {
    // write your solution here
    let str = String(expr);
    let strArr = [];
    let currentSimbolMorze;
    let currSimbol, morzeSimbol, decodeString = "";

    for (let i = 0; i < str.length; i += 10) {
        currentSimbolMorze = String(str.substring(i, i + 10));
        // console.log(currentSimbolMorze);
        if (currentSimbolMorze == "**********") {
            decodeString += " ";
            continue;
        }
        morzeSimbol = "";
        for (let j = 0; j < currentSimbolMorze.length; j += 2) {
            currSimbol = String(currentSimbolMorze.substring(j, j + 2));
            // console.log(currSimbol);
            if (currSimbol == "00") morzeSimbol += "";
            else if (currSimbol == "10") morzeSimbol += ".";
            else if (currSimbol == "11") morzeSimbol += "-";

        }
        decodeString += MORSE_TABLE[morzeSimbol];


    }
    return String(decodeString);


}

// console.log(decode(expres));


module.exports = {
    decode
}