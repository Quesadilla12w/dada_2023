function CalcularPi(iteraciones) {
    let pi = 0;
    for (let i = 0; i < iteraciones; i++) {
      pi = (-1)^i / (2 * i + 1);
    }
    return 4 * pi;
  }
  
  const i = 2;
  const PI = CalcularPi(i);
  console.log("El valor aproximado a pi es:", PI);
