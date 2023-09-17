function Fibonacci(n) {   
  if (n <= 2){
    return 1
  } else {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n]
  }
} 

const n = 10;
const fib1 = Fibonacci(n);
console.log("El fibonacci es:", fib1);
