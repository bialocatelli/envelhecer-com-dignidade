const PessoaIdosa = require("./PessoaIdosa/PessoaIdosa")
const Profissional = require("./Profissional/Profissional")
const Servico = require("./Servico/Servico")

const pessoaIdosa1 = new PessoaIdosa()
pessoaIdosa1.cadastrarPessoaIdosa("Bia", "bia@email.com", "11224455669", 61, "Rua João, 24")

const pessoaIdosa2 = new PessoaIdosa()
pessoaIdosa2.cadastrarPessoaIdosa("Cleide", "cleide@email.com", "11224455669", 62, "Rua João, 25")
console.log(PessoaIdosa.pessoasIdososas)

pessoaIdosa2.deletarCadastroPessoaIdosa()
console.log(PessoaIdosa.pessoasIdososas)

const profissional1 = new Profissional()
profissional1.cadastrarProfissional("Renan", "renan@email.com", "55555555555", "4566788946", "Saúde", "4521")

const profissional2 = new Profissional()
profissional2.cadastrarProfissional("Carol", "carol@email.com", "55555555555", "4566788946", "Beleza", "")
console.log(Profissional.profissionais)

const servico1 = new Servico("Corte de cabelo", 50.00, "Não")
console.log(servico1)
const servico2 = new Servico("Manicure", 50.00, "Não")
console.log(servico2)


console.log(profissional2.adicionarServicoAoProfissional(servico1))
console.log(profissional2.adicionarServicoAoProfissional(servico2))

