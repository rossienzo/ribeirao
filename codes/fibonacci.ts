export const fibonacci = (n: number, cache?: number[]): number => {
    if (n <= 1) {
        return n;
    }

    if (cache && cache.length === 0) {
        cache.push(0, 1);
    }

    // Se o cache já foi preenchido, retorna o valor do cache
    if (cache && n < cache.length) {
        return cache[n];
    }
    
    let result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

    if (cache) {
        cache[n] = result;
    }
    
    return result;
}

export const pertenceFibonacci = (num: number): string => {
    let cache: number[] = [];

    fibonacci(num + 1, cache);

    if (cache.includes(num)) {
        return `O número (${num}) pertence a sequência Fibonacci`;
    } else {
        return `O número (${num}) não pertence a sequência Fibonacci`;
    }
}

console.log(pertenceFibonacci(4)); // O número (4) pertence a sequência Fibonacci