const cetak = (start, end) => {
    return Array(end - start).fill().map((_, idx) => start + idx)
}
var data = cetak(0, 1000);

// even
let even = [];
for (var i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
        even.push(data[i])
    }
}
console.log(even);

// ood
let ood = [];
for (var i = 0; i < data.length; i++) {
    if (data[i] % 2 == 1) {
        ood.push(data[i])
    }
};
console.log(ood);

// numbers multiplies by 5
const multiPlies = data.map(e => e * 5);
console.log(multiPlies);

// prime numbers
let prime = [];
for (var i = 0; i < data.length; i++) {
    if (data[i] % 2 == 1) {
        prime.push(data[i])
    }
};
console.log(prime);


//prime numbers less than 100
let prime100 = [];
for (var i = 0; i < 100; i++) {
    if (data[i] % 2 == 1) {
        prime100.push(data[i])
    }
};

console.log(prime100)

