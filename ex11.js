const aluno = {
    nome: 'Mariana',
    idade: 17,
    curso: 'Desenvolvimento de Sistemas',
    turma: '2TDS',
};
const { nome, ...outrosDados } = aluno;

console.log('nome:', nome);
console.log('Outros dados:', outrosDados);
