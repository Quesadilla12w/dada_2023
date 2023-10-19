function imprimirDescendente(n) {
    if (n < 0) return;
    console.log(n);
    if (n === 0) return;
    imprimirDescendente(n - 1);
}

imprimirDescendente(10);
