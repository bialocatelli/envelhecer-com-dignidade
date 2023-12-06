class Servicos {
    #valorServico;
    voluntario;
    tipoServico;

    constructor(valorServico, voluntario, tipoServico) {
        this.#valorServico = valorServico;
        this.voluntario = voluntario;
        this.tipoServico = tipoServico;
    }

    getValorServico(){
        return this.#valorServico
    }

    setValorServico(novoValorServico){
        return this.#valorServico = novoValorServico
    }

}