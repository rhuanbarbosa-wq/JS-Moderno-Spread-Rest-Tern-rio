const produto = {
    nome: 'Notebook',
    preco: 3500,
    estoque: 5,
};

const produtoAtualizado = {
    ...produto,
    status: produto.estoque > 0 ? 'Disponível' : 'Sem estoque',
};

console.log(produtoAtualizado);
