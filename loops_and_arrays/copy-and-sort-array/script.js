let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (array) => {
    return Array.from(array).sort();
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)