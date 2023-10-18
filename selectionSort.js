function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min_index]) {
                min_index = j;
            }
        }
        if (i !== min_index) {
            let temp = array[i];
            array[i] = array[min_index];
            array[min_index] = temp;
        }
    }
    return array;
}
