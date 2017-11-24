console.log('hello git');

function sum(a) {
    return function(b) {
        return a + b;
    }
}

function diff(a) {
    return function(b) {
        return a - b;
    }
}