let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const filterRangeInPlace = (array, startValueIncluding, endValueIncluding) => {
    let teste = []
    for (let i = 0; i < array.length; i++) {
        if (startValueIncluding > array[i] || endValueIncluding < array[i]) {
            array.splice(i, 1);
            i--;
        };
};

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
}
console.log( arr ); // [3, 1]