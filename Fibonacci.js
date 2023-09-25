function Fibonacci(n) {   
  if (n <= 2){
    return 1
  } else {  
    pi = Fibonacci(n-1) + Fibonacci(n-2);
  return pi
  }
} 

const n = 10;
const fib1 = Fibonacci(n);
console.log("El fibonacci es:", fib1); 

