/**
 * Esta función suma dos números.
 * @param {string} cadena - El primer número.

 */
function calcularTildes(cadena) {
  let contador = 0;
  for (let i = 0; i < cadena.length-1; i++) {
    if (cadena[i] == "Á" || cadena[i] == "É" || cadena[i] == "Í" || cadena[i] == "Ó" || cadena[i] == "Ú" ||
       cadena[i] == "á" || cadena[i] == "é" || cadena[i] == "í" || cadena[i] == "ó" || cadena[i] == "ú"
    ) {
        contador ++
      
    }
  }
  return contador;
}

const frase = "Hoy es un día soleado en la ciudad de México. Qué hermosa está la naturaleza.";
const tildes = calcularTildes(frase);
console.log("El numero de tildes de la palabra es:", tildes);
