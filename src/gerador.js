const {retiraAcentos, retirarPalavrasMenorTres, stringSemPrimeiraPalavra, menorPalavra} = require('./util');

class Gerador {
    /**
     * Create an instance of Gerador
     *
     * @return {Object} Gerador
     */
    constructor() {
        this.tentativa = 1;
        this._erro = 1;
        this.tamanhoDaFrente = 1;
        this.count = 1;
        this._erro1 = 1;
        this._erro3 = 1;
        this._erro2 = 1;
        this._erro4 = 1;
        this.quantidadeDosSobrenome = 0;
    }

    /**
     * Obs: Tenha certeza que o valor seja unico;
     * @param nome
     * @param defaul
     */
    setNome(nome) {
        if (typeof nome != 'string') {
            throw "O valor passado do nome  nao e uma string"
        }
        const sliceNome = this._format(nome);
        this.nomesValidos = retirarPalavrasMenorTres(sliceNome);
        const sobrenomes = stringSemPrimeiraPalavra(this.nomesValidos);
        this.menorSobrenome = menorPalavra(sobrenomes).string;
        this.primeiroNome = this.nomesValidos[0].string;
        this._iniciarErros()
        this._iniciarErro();
    }

    /**
     * @returns {string} Todas vez que voce a chamar o metodo ele tentara uma nova combinacao pelas regras criadas  e usada
     * @example helio.dantas helio1
     */
    gerar() {
        this.tentativa1()
            .tentativa2()
            .tentativa3()
            .tentativa4()
            ._default();
        return this.email;
    }

    tentativa1() {
        if (this.tentativa === 1) {
            if (this._erro1 !== 0) {
                this._erro1--;
                this.email = `${this.primeiroNome}.${this.nomesValidos[this._erro].string}`;
                this._erro--;

            } else {
                this.tentativa = 2;
                this._iniciarErro();
            }
        }
        return this;
    }

    tentativa2() {
        if (this.tentativa === 2) {
            if (this._erro2 !== 0) {
                this._erro2--;
                this.email = `${this.primeiroNome}_${this.nomesValidos[this._erro].string}`;
                this._erro--;
            } else {
                this.tentativa = 3;
                this._iniciarErro();
            }
        }
        return this;
    }


    tentativa3() {
        if (this.tentativa === 3) {
            if (this._erro3 !== 0) {
                this._erro3--;
                this.email = `${this.primeiroNome}-${this.nomesValidos[this._erro].string}`;
                this._erro--;
            } else {
                this.tentativa = 4;
                this._iniciarErro();
            }
        }
        return this;
    }

    tentativa4() {
        if (this.tentativa === 4) {
            if (this.nomesValidos.length === 1) {
                this.email = `${this.primeiroNome}${this.count}`;
                this.count++;
                return this;
            }
            if (this._erro4 !== 0) {
                this._iniciarErro();
                this._erro4 = this.nomesValidos.length - 1;
                this.count++;
            }
            this._erro4--;

            this.email = `${this.primeiroNome}.${this.nomesValidos[this._erro].string}${this.count}`;
            this._erro--;

        }
        return this;
    }

    _tentativa5() {
        if (this.tentativa === 5) {
            if (this._erro2 < this.nomesValidos.length) {
                if (this.nomesValidos[this._erro].string.slice(0, this.tamanhoDaFrente).length >= this.nomesValidos[this._erro].string.length - 1) {
                    this._erro++;
                    this._erro2++;
                    this.tamanhoDaFrente = 1
                } else {
                    const ff = this.nomesValidos[this._erro].string.slice(0, this.tamanhoDaFrente);
                    this.tamanhoDaFrente++;
                    this.email = `${ff}${this.primeiroNome}.${this.nomesValidos[this._erro].string}`;
                }

            } else {
                this.tentativa = 3;
                this._erro = 1
            }
        }
        return this;
    }

    _default() {
        if (this.email.length >= 21) {
            this.email = `${this.primeiroNome.slice(0, 1)}.${this.menorSobrenome}${this.count}`;
            this.count++;
        }
        return this;
    }

    _format(nome) {
        const nomeMinuscule = nome.toLowerCase();
        const nomeSemAcento = retiraAcentos(nomeMinuscule);
        return nomeSemAcento.split(" ");
    }
    _iniciarErro() {
        this._erro = this.nomesValidos.length - 1;
    }

    _iniciarErros() {
        this._erro1 = this.nomesValidos.length - 1;
        this._erro2 = this.nomesValidos.length - 1;
        this._erro3 = this.nomesValidos.length - 1;
        this._erro4 = this.nomesValidos.length - 1;
    }
}


module.exports = Gerador;
