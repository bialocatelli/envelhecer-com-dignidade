class Servico {
    tipoServico;
    #valorServico;
    voluntario;

    constructor(tipoServico, valorServico, voluntario) {
        this.tipoServico = tipoServico;
        this.#valorServico = valorServico;
        this.voluntario = voluntario;
    }

    getValorServico() {
        return this.#valorServico
    }

    setValorServico(novoValorServico) {
        return this.#valorServico = novoValorServico
    }

    verificaTrabalhoVoluntario() {
        if (this.voluntario === "Sim") {
            return this.getValorServico() = 0.0
        }
    }
}

module.exports = Servico