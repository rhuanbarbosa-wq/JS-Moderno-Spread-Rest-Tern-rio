const somar = (...numeros) => {
    let total = 0;
    for (const numero of numeros) {
        total += numero;
    }
    return total;
};

console.log(somar(10, 20, 30));
