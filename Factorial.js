function Factorial(numero) {  
  if (numero == 1 || numero == 0){
    return  1
  } else {
  let resultado = 1; 
  for (let i = 1; i <= numero; i++) {
    resultado = resultado*i; 
  }
  return resultado;
}}

const num = 0;
const fac = Factorial(num);
console.log("El factorial es:", fac);
