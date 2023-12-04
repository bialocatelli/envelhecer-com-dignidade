const Pessoa = require("../Pessoa/Pessoa");

class Profissional extends Pessoa {
    #documento;
    areaAtuacao;
    registroProfissional;
    static profissionais = [];
    static servicos = [];

    constructor(nome, email, telefone, documento, areaAtuacao, registroProfissional) {
        super(nome, email, telefone);
        this.#documento = documento;
        this.areaAtuacao = areaAtuacao;
        this.registroProfissional = registroProfissional;
        this.constructor.profissionais.push({nome: this.nome, telefone: this.telefone})
    }

    getDocumento() {
        return this.#documento
    }

    //implementar
    /*
    cadastrarProfissional() - se area de atuação for saude o registro profissional não pode ser nulo.
    deletarProfissinonal()
    adicionarServico()*/
}

module.exports = Profissional