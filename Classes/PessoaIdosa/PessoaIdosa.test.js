const PessoaIdosa = require("./PessoaIdosa")

describe("Teste da Classe PessoaIdosa", () => {
    test("Verifica se objeto pessoaIdosa está sendo instanciado.", () => {
        const pessoaIdosa = new PessoaIdosa();
        expect(pessoaIdosa instanceof PessoaIdosa).toBe(true)
    })

    test("Instanciar objeto pessoaIdosa com valores corretos", () => {
        const pessoaIdosa = new PessoaIdosa("Bia", "bia@email.com", "11444455588", 61, "Rua João, 241")
        expect(pessoaIdosa.nome).toBe("Bia");
        expect(pessoaIdosa.email).toBe("bia@email.com");
        expect(pessoaIdosa.telefone).toBe("11444455588");
        expect(pessoaIdosa.idade).toBe(61);
        expect(pessoaIdosa.getEndereco()).toBe("Rua João, 241")
    })

    test("Retorna mensagem de sucesso ao cadastrar pessoa idosa.", () => {
        const pessoaIdosa = new PessoaIdosa()
        expect(pessoaIdosa.cadastrarPessoaIdosa("Bia", "bia@email.com", "11444455588", 61, "Rua João, 241")).toBe(
            `Olá, seu cadastro foi realizado com sucesso!`
        )
        expect(pessoaIdosa.nome).toBe("Bia");
        expect(pessoaIdosa.email).toBe("bia@email.com");
        expect(pessoaIdosa.telefone).toBe("11444455588");
        expect(pessoaIdosa.idade).toBe(61);
        expect(pessoaIdosa.getEndereco()).toBe("Rua João, 241")
    })

    test("Retorna mensagem de erro ao tentar cadatrar pessoa idosa com valores icorretos", () => {
        const pessoaIdosa = new PessoaIdosa()
        expect(() => pessoaIdosa.cadastrarPessoaIdosa("Bia", "bia@email.com", "11444455588", 59, "Rua João, 241")).toThrow(`Não foi possível realizar seu cadastro. Idade mínima tem que ser de 60 anos.`);
    })

    test("Aceita o número do celular se for igual a 11 digitos", () =>{
        const pessoaIdosa = new PessoaIdosa()
        pessoaIdosa.verificaTelefone("11155533322")
    })
    
    test("Retorna mensagem de erro se número de celuar for diferente de 11 digitos", () =>{
        const pessoaIdosa = new PessoaIdosa()
        expect(() => pessoaIdosa.verificaTelefone("1144445")).toThrow(`Telefone inválido.`);
    })
})