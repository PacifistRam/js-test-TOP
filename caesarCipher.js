function caesarCipher(str,shiftFactor){
    // [...Array(26)] >>> this initializes an array with 26 undefined/empty values
   // generate alphabet array      
    const alphabetSmallArray =  [...Array(26)].map((i,index) => String.fromCharCode(index + 97));
    const alphabetLargeArray =  [...Array(26)].map((i,index) => String.fromCharCode(index + 65));

    const encryptedStr = str.split('').map(char  => {
        if(/[a-z]/.test(char)) {
            //encrypt lowercase letters
            const index = (char.charCodeAt(0) - 97 + shiftFactor) % 26;
            // logic note below 
            return alphabetSmallArray[index];
        }
        else if(/[A-Z]/.test(char)) {
            //encrypt lowercase letters
            const index = (char.charCodeAt(0) - 65 + shiftFactor) % 26;
            return alphabetLargeArray[index];
        } else {
            return char;
        }
    }).join('');

    return encryptedStr;
}

module.exports  = caesarCipher;




/* LOGIC NOT: 
 //since split makes array for each character with only index 0, we find the charCode(0) 
 -97 or -65 brings the character to its index with corresponding array, shiftFactor shifts it to corresponding index and modulo 26 is used to bring the index back between 26 basically wrapping so index doesn't overflow

 */