function fibonacciFor(n) {
    let fib = [];
    let x = 0, y = 1;

    for (let i = 0; i < n; i++) {
        fib.push(x);
        let temp = x + y;
        x = y;
        y = temp;
    }

    return fib;
}

function fibonacciRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const prev = fibonacciRec(n - 1);
    const next = prev[prev.length - 1] + prev[prev.length - 2];
    return [...prev, next];
}



// Ejemplo:
console.log(fibonacciFor(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciRec(5));
