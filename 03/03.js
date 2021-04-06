const kata = ['aku', 'ingin', 'dapat',]
const lagu = `
Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu
La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali
`
const counter = text =>
    text.toLowerCase().split(/\s/).reduce((count, word) => {
        count + ' ' + (kata.includes(word) ? count[word] = (count[word] || 0) + 1 : word)
        return count
    }, {})


const coba = counter(lagu);
console.log(coba);






