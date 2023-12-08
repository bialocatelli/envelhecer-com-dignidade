const Profissional = require("../Profissional/Profissional");
const PessoaIdosa = require("./PessoaIdosa")
const Servico = require("../Servico/Servico")

describe("Teste da Classe PessoaIdosa", () => {
    test("Verifica se objeto pessoaIdosa está sendo instanciado.", () => {
        const pessoaIdosa = new PessoaIdosa();
        expect(pessoaIdosa instanceof PessoaIdosa).toBe(true)
    })

    test("Instanciar objeto pessoaIdosa com valores corretos", () => {
        const pessoaIdosa = new PessoaIdosa("Bia", "bia@email.com", "11444455588", 61)
        expect(pessoaIdosa.nome).toBe("Bia");
        expect(pessoaIdosa.email).toBe("bia@email.com");
        expect(pessoaIdosa.telefone).toBe("11444455588");
        expect(pessoaIdosa.idade).toBe(61);
    })

    test("Retorna mensagem de sucesso ao cadastrar pessoa idosa.", () => {
        const pessoaIdosa = new PessoaIdosa()
        expect(pessoaIdosa.cadastrarPessoaIdosa("Bia", "bia@email.com", "11444455588", 61)).toBe(
            `Olá, ${pessoaIdosa.nome}, seu cadastro foi realizado com sucesso!`
        )
        expect(pessoaIdosa.nome).toBe("Bia");
        expect(pessoaIdosa.email).toBe("bia@email.com");
        expect(pessoaIdosa.telefone).toBe("11444455588");
        expect(pessoaIdosa.idade).toBe(61);
    })

    test("Retorna mensagem de erro ao tentar cadatrar pessoa idosa com valores icorretos", () => {
        const pessoaIdosa = new PessoaIdosa()
        expect(() => pessoaIdosa.cadastrarPessoaIdosa("Bia", "bia@email.com", "11444455588", 59)).toThrow(`Não foi possível realizar seu cadastro. Idade mínima tem que ser de 60 anos.`);
    })

    test("Aceita o número do celular se for igual a 11 digitos", () => {
        const pessoaIdosa = new PessoaIdosa()
        pessoaIdosa.verificaTelefone("11155533322")
    })

    test("Retorna mensagem de erro se número de celuar for diferente de 11 digitos", () => {
        const pessoaIdosa = new PessoaIdosa()
        expect(() => pessoaIdosa.verificaTelefone("1144445")).toThrow(`Telefone inválido.`);
    })

    test('Deve lançar um erro se o profissional não for uma instância de Profissional', () => {
        const pessoaIdosa = new PessoaIdosa();
        expect(() => pessoaIdosa.verificaProfissional("João")).toThrow(`Profissional não encontrado.`);
    })

    test("Retorna mensagem de sucesso ao contatar profissional", () => {
        const pessoaIdosa = new PessoaIdosa("Bia", "bia@email.com", "11444455588", 60);
        const profissional = new Profissional("Carol", "carol@email.com", "11444455588", "4455411", "Beleza", "");
        const servico = new Servico("Corte de cabelo", 50);

        expect(pessoaIdosa.contatarProfissional(profissional, servico)).toBe(
            (`Olá, ${pessoaIdosa.nome}! O profissional ${profissional.nome} irá entrar em contato em até 24h através do telefone ${pessoaIdosa.telefone}. O serviço ${servico.tipoServico} está no valor de R$${servico.getValorServico()},00 reais. Obrigado!`)

        )
    })
})