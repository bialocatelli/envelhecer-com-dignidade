const Pessoa = require("../Pessoa/Pessoa")

class PessoaIdosa extends Pessoa {
    idade;
    #endereco;
    static pessoasIdososas = []

    constructor(nome, email, telefone, idade, endereco) {
        super(nome, email, telefone);
        this.idade = idade;
        this.#endereco = endereco;
        PessoaIdosa.pessoasIdososas.push(this);
    }

    getEndereco() {
        return this.#endereco
    }

    setEndereco(novoEndereco) {
        return this.#endereco = novoEndereco
    }


    cadastrarPessoaIdosa(nome, email, telefone, idade, endereco) {

        this.verificaTelefone(telefone)

        const idoso = idade >= 60

        if (!idoso) {
            throw `Não foi possível realizar seu cadastro. Idade mínima tem que ser de 60 anos.`
        } else {
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
            this.idade = idade;
            this.#endereco = endereco;
            return `Olá, seu cadastro foi realizado com sucesso!`
        }
    }

    deletarCadastroPessoaIdosa() {
        let i = PessoaIdosa.pessoasIdososas.indexOf(this);
        PessoaIdosa.pessoasIdososas.splice(i, 1)
    }

}

module.exports = PessoaIdosa