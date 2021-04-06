const arrayList = [3, 12, 4, 5, 8, 9];

const sortMethod = (arr) => {
    arr.sort((a, b) => { return a - b })
    return arr
};

console.log(sortMethod(arrayList));