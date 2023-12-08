const PessoaIdosa = require("./PessoaIdosa/PessoaIdosa")
const Profissional = require("./Profissional/Profissional")
const Servico = require("./Servico/Servico")
const Pessoa = require('./Pessoa/Pessoa')

console.log("--------- Evelhecer com Dignidade -----------")
console.log("*********************************************")

console.log("CADASTRAR USUÁRIO IDOSO")
const pessoaIdosa1 = new PessoaIdosa()
pessoaIdosa1.cadastrarPessoaIdosa("Bia", "bia@email.com", "11224455669", 61)

const pessoaIdosa2 = new PessoaIdosa()
pessoaIdosa2.cadastrarPessoaIdosa("Cleide", "cleide@email.com", "11224455669", 62)
console.log(PessoaIdosa.pessoasIdososas)

console.log("*********************************************")
console.log("CANCELAR CADASTRO PESSOA IDOSA")
pessoaIdosa2.deletarCadastroPessoaIdosa()
console.log(PessoaIdosa.pessoasIdososas)

console.log("*********************************************")
console.log("CADASTRAR PROFISSIONAL")
const profissional1 = new Profissional()
profissional1.cadastrarProfissional("Renan", "renan@email.com", "55555555555", "4566788946", "Saúde", "4521")

const profissional2 = new Profissional()
profissional2.cadastrarProfissional("Carol", "carol@email.com", "55555555555", "4566788946", "Beleza", "")
console.log(Profissional.profissionais)

console.log("*********************************************")
console.log("CADASTRAR SERVIÇO")
const servico1 = new Servico("Corte de cabelo", 50.00)
console.log(servico1)
const servico2 = new Servico("Manicure", 50.00)
console.log(servico2)
const servico3 = new Servico("Arrumar eletrodomestico", 100.00)
const servico4 = new Servico("Aulas de computação", 80.00)

console.log("*********************************************")
console.log("ADICIONANDO SERVIÇO AO PROFISSIONAL")
console.log(profissional2.adicionarServicoAoProfissional(servico1))
console.log(profissional2.adicionarServicoAoProfissional(servico2))


// console.log("*********************************************")
// console.log("ENCONTRAR PROFISSIONAL")
// console.log(pessoaIdosa1.localizarProfissional("Renan"))
// console.log(profissional1.encontrarServicos("Corte de cabelo"))

console.log("*********************************************")
console.log("CONTATAR PROFISSIONAL")
console.log(pessoaIdosa1.contatarProfissional(profissional2, servico1))

console.log("*********************************************")
console.log("LISTA DE USUÁRIOS QUE DESEJAM CONTATO")
console.log(profissional1.contatosRecebidos())
console.log(profissional2.contatosRecebidos())

