const produto = {
    nome: 'Mouse',
    preco: 80,
};
const produtoCompleto = { ...produto, estoque: 10 };

console.log(produtoCompleto);
