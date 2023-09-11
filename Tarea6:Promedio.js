function    Promedio(Array) {
    if (Array.length === 0) {
        return null; 
    } else {
        let suma = Array[0]; 
        for (let i = 1; i < Array.length; i++) {
            suma = suma + Array[i]
        }
        return suma/Array.length;
    }
}


const Array1 = [9,8,7,6,5,4,3,2,1,0];
const promedio = Promedio(Array1);
console.log("El promedio es:", promedio);
