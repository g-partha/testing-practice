export function ceasarCipher(string, shiftFactor) {
    const charCodeArray = [];
    for(let i = 0; i < string.length; i++){
        charCodeArray.push(string.charCodeAt(i));
    }
    const cipherArray = charCodeArray.map(value => {
        if(value >= 65 && value <= 90){
            if(value + shiftFactor > 90) return value + shiftFactor - (90 - 65); // A is 65, Z is 90
            return value + shiftFactor;
        } else if ( value >= 97 && value <= 122){
            if(value + shiftFactor > 122) return value + shiftFactor - (122 - 97); // a is 97 z is 122
            return value + shiftFactor;
        } else {
            return value;
        }
    });
    return String.fromCharCode(...cipherArray);
}