const usuario = {
    id: 10,
    nome: 'Carlos',
    email: 'carlos@email.com',
    senha: '123456',
    ativo: true,
};
const { senha, ...usuarioSemSenha } = usuario;

const usuarioSeguro = {
    ...usuarioSemSenha,
    status: usuario.ativo === true ? 'Ativo' : 'Inativo',
};

console.log(usuarioSeguro);
