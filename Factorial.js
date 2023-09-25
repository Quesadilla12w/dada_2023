function Factorial(numero) {  
  if (numero == 1 || numero == 0){
    return  1
  } else {
    resultado = numero * Factorial(numero-1)
  }
  return resultado;
}

const num = 5;
const fac = Factorial(num);
console.log("El factorial es:", fac);
