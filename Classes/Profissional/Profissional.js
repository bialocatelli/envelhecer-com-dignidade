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
        Profissional.profissionais.push(this);
        Profissional.servicos.push(this);
    }

    getDocumento() {
        return this.#documento
    }

    verificaRegistroProfissionalAreaSaude(areaAtuacao, registroProfissional) {
        if (areaAtuacao === "Saúde") {
            if (registroProfissional == null || registroProfissional == "") {
                throw "Por favor, preencha o número do registro profissional."
            }
        }
    }

    cadastrarProfissional(nome, email, telefone, documento, areaAtuacao, registroProfissional) {
        this.verificaTelefone(telefone)
        this.verificaRegistroProfissionalAreaSaude(areaAtuacao, registroProfissional)
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.#documento = documento;
        this.areaAtuacao = areaAtuacao;
        this.registroProfissional = registroProfissional;
        return `Olá, seu cadastro foi realizado com sucesso!`
    }


    deletarCadastroProfissional() {
        let i = Profissional.profissionais.indexOf(this);
        Profissional.profissionais.splice(i, 1)
    }

}
module.exports = Profissional