function dominantes(arr) {
    const result = [];
    let k = 0; 

    for (let i = 0; i < arr.length; i++) {
        let esDominante = true;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                esDominante = false;
                break;
            }
        }

        if (esDominante) {
            result[k] = arr[i];
            k++;
        }
    }
  
    return result;
}

console.log(dominantes([1, 21, 4, 7, 5])); 
console.log(dominantes([5, 4, 3, 2, 1])); 
