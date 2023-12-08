const Pessoa = require("../Pessoa/Pessoa")
const Profissional = require("../Profissional/Profissional")

class PessoaIdosa extends Pessoa {
    idade;
    historicoContatos;
    static pessoasIdososas = [];

    constructor(nome, email, telefone, idade, endereco) {
        super(nome, email, telefone);
        this.idade = idade;
        this.historicoContatos = [];
        PessoaIdosa.pessoasIdososas.push(this);
    }

    cadastrarPessoaIdosa(nome, email, telefone, idade, endereco) {
        this.verificaTelefone(telefone)
        const idoso = idade >= 60
        if (!idoso) {
            throw `Não foi possível realizar seu cadastro. Idade mínima tem que ser de 60 anos.`
        } else {
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
            this.idade = idade;
            return `Olá, ${this.nome}, seu cadastro foi realizado com sucesso!`
        }
    }

    deletarCadastroPessoaIdosa() {
        let i = PessoaIdosa.pessoasIdososas.indexOf(this);
        PessoaIdosa.pessoasIdososas.splice(i, 1)
    }

    verificaProfissional(profissional) {
        if (!(profissional instanceof Profissional)) {
            throw `Profissional não encontrado.`
        }
    }

    adicionaProfissional(profissional, servico) {
        this.historicoContatos.push({ Profissional: profissional.nome, Servico: servico.tipoServico, Valor: servico.getValorServico() })
        this.historicoContatos.reverse()
    }

    atualizaHistoricoRecebidosProfissional(profissional) {
        profissional.numeroDeContatosRecebidos++
        profissional.historicoContatos.push({ Nome: this.nome, Idade: this.idade, Telefone: this.telefone })
        profissional.historicoContatos.reverse()
    }

    contatarProfissional(profissional, servico) {
        this.verificaProfissional(profissional)
        profissional.validaServico(servico)
        this.adicionaProfissional(profissional, servico);
        this.atualizaHistoricoRecebidosProfissional(profissional)

        return (`Olá, ${this.nome}! O profissional ${profissional.nome} irá entrar em contato em até 24h através do telefone ${this.telefone}. O serviço ${servico.tipoServico} está no valor de R$${servico.getValorServico()},00 reais. Obrigado!`)
    }
}

module.exports = PessoaIdosa