class Servico {
    tipoServico;
    #valorServico;

    constructor(tipoServico, valorServico) {
        this.tipoServico = tipoServico;
        this.#valorServico = valorServico;
    }

    getValorServico() {
        return this.#valorServico
    }

    setValorServico(novoValorServico) {
        return this.#valorServico = novoValorServico
    }
}

module.exports = Servico