const Profissional = require("./Profissional")

describe("Teste da Classe Profissional", () => {
    test("Verifica se objeto profissional está sendo instanciado.", () => {
        const profissional = new Profissional();
        expect(profissional instanceof Profissional).toBe(true)
    })

    test("Instanciar objeto profissional com valores corretos", () => {
        const profissional = new Profissional("Bia", "bia@email.com", "11444455588", "4455411", "Beleza", "")
        expect(profissional.nome).toBe("Bia");
        expect(profissional.email).toBe("bia@email.com");
        expect(profissional.telefone).toBe("11444455588");
        expect(profissional.getDocumento()).toBe("4455411");
        expect(profissional.areaAtuacao).toBe("Beleza");
        expect(profissional.registroProfissional).toBe("");
    })

    test("Retorna mensagem de sucesso ao cadastrar profissional.", () => {
        const profissional = new Profissional()
        expect(profissional.cadastrarProfissional("Bia", "bia@email.com", "11444455588", "4455411", "Beleza", "")).toBe(
            `Olá, seu cadastro foi realizado com sucesso!`
        )
        expect(profissional.nome).toBe("Bia");
        expect(profissional.email).toBe("bia@email.com");
        expect(profissional.telefone).toBe("11444455588");
        expect(profissional.getDocumento()).toBe("4455411");
        expect(profissional.areaAtuacao).toBe("Beleza");
        expect(profissional.registroProfissional).toBe("");
    })

    test("Retorna mensagem de erro ao tentar cadastrar profissional da Saúde sem registro profissional.", () => {
        const profissional = new Profissional()
        expect(() => profissional.cadastrarProfissional("Bia", "bia@email.com", "11444455588", "4455411", "Saúde", "")).toThrow("Por favor, preencha o número do registro profissional.");
    })

    test("Aceita o número do celular se for igual a 11 digitos", () => {
        const profissional = new Profissional()
        profissional.verificaTelefone("11155533322")
    })

    test("Retorna mensagem de erro se número de celuar for diferente de 11 digitos", () => {
        const profissional = new Profissional()
        expect(() => profissional.verificaTelefone("1144445")).toThrow(`Telefone inválido.`);
    })
})