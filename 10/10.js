
var post;

fetch('https://jsonplaceholder.typicode.com/posts/53').then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (data) {

    post = data;

    return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);

}).then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (userData) {
    console.log(post, userData);
}).catch(function (error) {
    console.warn(error);
});