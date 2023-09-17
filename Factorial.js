function Factorial(numero) {   
  let resultado = 1; 
  for (let i = 1; i <= numero; i++) {
    resultado = resultado*i; 
  }
  return resultado;
}

const num = 6;
const fac = Factorial(num);
console.log("El factorial es:", fac);
