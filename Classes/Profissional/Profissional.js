const Pessoa = require("../Pessoa/Pessoa");

class Profissional extends Pessoa {
    tipoServico;
    #documento;
    registroProfissional;
    static listaProfissionais = []

    constructor(nome, email, telefone, documento, registroProfissional) {
        super(nome, email, telefone);
        this.tipoServico = tipoServico;
        this.#documento = documento;
        this.registroProfissional = registroProfissional
        this.constructor.listaProfissionais.push({nome: this.nome, telefone: this.telefone, tipoServico: this.tipoServico})
    }

    getDocumento() {
        return this.#documento
    }

    //implementar
    /*
    cadastrarProfissional()
    deletarProfissinonal()
    adicionarServico()*/
}

module.exports = Profissional