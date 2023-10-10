function merge(arrayA, arrayB) {
    let i = 0;
    let j = 0;
    let k = 0;
    const result = [];

    while (result.length < arrayA.length + arrayB.length) {
        if (i < arrayA.length && j < arrayB.length) {
            if (arrayA[i] <= arrayB[j]) {
                result[k] = arrayA[i];
                i++;
            } else {
                result[k] = arrayB[j];
                j++;
            }
        }
        else {
            if (i == arrayA.length) {
                result[k] = arrayB[j];
                j++;
            }
            else {
                result[k] = arrayA[i];
                i++;
            }
        }

        k++;
    }
    return result;
}

const arrA = [1, 5, 7, 9, 11, 12,13,14];
const arrB = [3, 4, 9, 10];

console.log(merge(arrA, arrB));
