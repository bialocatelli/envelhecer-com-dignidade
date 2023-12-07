class Pessoa {
    nome;
    email;
    telefone;
    static pessoasIdososas = [];
    static profissionais = [];

    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        Pessoa.pessoasIdososas.push(this);
        Pessoa.profissionais.push(this);
    }

    verificaTelefone(telefone) {
        if (telefone.length != 11) {
            throw "Telefone inválido."
        }
    }
}

module.exports = Pessoa