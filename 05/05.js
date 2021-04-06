const text_1 = "Mammals";
const text_2 = "Bruiser build";

const counter = text => {
    const count = {}
    text.toLowerCase().split('').forEach(char => {
        count[char] = count[char] ? (count[char].toString().concat("*")) : 1
    });
    return count
}


console.log(counter(text_1));
console.log(counter(text_2));
