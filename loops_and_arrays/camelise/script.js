const camelise = (string) => {
    return string
    .split("-")
    .map((word, index) => index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
    .join("");
};

console.log(camelise("background-color"));