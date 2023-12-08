class Pessoa {
    nome;
    email;
    telefone;
  
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    verificaTelefone(telefone) {
        if (telefone.length != 11) {
            throw "Telefone inválido."
        }
    }
}

module.exports = Pessoa