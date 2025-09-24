const testNumbers = [1, 2, 3, 4, 5, 6];

const sumOfTripledEvens = (array) => {
    return array.filter(number => number % 2 === 0).map(number => number * 3).reduce((summed, number) => summed + number);
}

console.log(sumOfTripledEvens(testNumbers))