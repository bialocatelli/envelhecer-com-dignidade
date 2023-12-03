const Pessoa = require("./Pessoa")

describe("Teste da Classe Pessoa", () => {
    test("Verifica se objeto pessoa está sendo instanciado.", () => {
        const pessoa = new Pessoa();
        expect(pessoa instanceof Pessoa).toBe(true)
    })
})