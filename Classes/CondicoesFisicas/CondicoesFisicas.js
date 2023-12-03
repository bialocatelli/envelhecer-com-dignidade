const PessoaIdosa = require("../PessoaIdosa/PessoaIdosa");

class CondicoesFisicas extends PessoaIdosa {
    mobilidadeReduzida;
    condicaoEspecial;

    constructor(mobilidadeReduzida, condicaoEspecial) {
        this.mobilidadeReduzida = mobilidadeReduzida;
        this.condicaoEspecial = condicaoEspecial;
    }

    informarCondicoesDaPessoaIdosa(mobilidadeReduzida, condicaoEspecial) {
        if (mobilidadeReduzida && condicaoEspecial == null) {
            return `Por favor, informe se ${this.name} possui algum limite físico para que o profissional possa atende-lo melhor.`
        }
        return ` ${this.name} possui ${mobilidadeReduzida} e ${condicaoEspecial}.`
    }

}

module.exports = CondicoesFisicas