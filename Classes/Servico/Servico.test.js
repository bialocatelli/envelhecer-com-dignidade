const Servico = require("./Servico")

describe("Teste da Classe Servico", () => {
    test("Verifica se objeto serviço está sendo instanciado.", () => {
        const servico = new Servico();
        expect(servico instanceof Servico).toBe(true)
    })

    test("Instanciar objeto profissional com valores corretos", () => {
        const servico = new Servico("Corte de cabelo", 50)
        expect(servico.tipoServico).toBe("Corte de cabelo");
        expect(servico.getValorServico()).toBe(50);
    })

    test("Valida atualização do valor do serviço", () => {
        const servico = new Servico("Corte de cabelo", 50)
        servico.setValorServico(60)
        expect(servico.getValorServico()).toBe(60)
    })

})