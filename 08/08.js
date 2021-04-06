const secret_text = "23dn3ir30fd2eddd";

const masking = text => {
    return text.split('').map((e, i) => i < text.length - 3 ? '#' : e).join('');
};

console.log(masking(secret_text));