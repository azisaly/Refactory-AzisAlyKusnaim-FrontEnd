const list_letters_first = ["c", "d", "e", "g", "h"];
const list_letters_second = ["X", "Z"];
function missingLetter(huruf) {
    const abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < huruf.length; i++) {
        firstIndex = abjad.indexOf(huruf[i].toLowerCase())
        if (huruf[0] === huruf[0].toUpperCase()) {
            if (abjad[firstIndex + 1].toUpperCase() !== huruf[i + 1]) {
                return abjad[firstIndex + 1].toUpperCase()
            }
        } else if (huruf[0] === huruf[0].toLowerCase()) {
            if (abjad[firstIndex + 1] !== huruf[i + 1])
                return abjad[firstIndex + 1].toLowerCase()
        }
    }
};

console.log(missingLetter(list_letters_first));
console.log(missingLetter(list_letters_second));


