const Pessoa = require("../Pessoa/Pessoa");
const Servico = require("../Servico/Servico")
class Profissional extends Pessoa {
    #documento;
    areaAtuacao;
    registroProfissional;
    static profissionais = [];
    #servicos = [];

    constructor(nome, email, telefone, documento, areaAtuacao, registroProfissional) {
        super(nome, email, telefone);
        this.#documento = documento;
        this.areaAtuacao = areaAtuacao;
        this.registroProfissional = registroProfissional;
        Profissional.profissionais.push(this);
        this.#servicos.push(this);
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

    validaServico(servico) {
        if (!(servico instanceof Servico)) {
            throw `Serviço não identificado.`
        }
    }

    ultrapassarLimiteDeServicos() {
        if (this.#servicos.length >= 3)
            throw (`Não foi possível adicionar mais serviços. Máximo de 3 serviços permitidos.`)
    }

    adicionarServicoAoProfissional(servico) {
        this.validaServico(servico);
        this.ultrapassarLimiteDeServicos();
        this.#servicos.push(servico);
        return `Serviço ${servico.tipoServico}, no valor de R$ ${servico.getValorServico()} reais, adicionado ao profissional ${this.nome}!`;
    }
}

module.exports = Profissional