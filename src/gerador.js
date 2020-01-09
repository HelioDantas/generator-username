const {retiraAcentos, retirarPalavrasMenorTres, stringSemPrimeiraPalavra, menorPalavra, Sobrenomes} = require('./util');

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
        this.retidaraDePalavrasMenoresQueTres = retirarPalavrasMenorTres(sliceNome);
        const nomeSemPrimeiroNome = stringSemPrimeiraPalavra(this.retidaraDePalavrasMenoresQueTres);

        this.menorSobrenome = menorPalavra(nomeSemPrimeiroNome);
        this._iniciErros()
        this._iniciErro();
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
                this.email = `${this.retidaraDePalavrasMenoresQueTres[0].string}.${this.retidaraDePalavrasMenoresQueTres[this._erro].string}`;
                this._erro--;

            } else {
                this.tentativa = 2;
                this._iniciErro();
            }


        }
        return this;
    }

    tentativa2() {
        if (this.tentativa === 2) {
            if (this._erro2 !== 0) {
                this._erro2--;
                this.email = `${this.retidaraDePalavrasMenoresQueTres[0].string}_${this.retidaraDePalavrasMenoresQueTres[this._erro].string}`;
                this._erro--;

            } else {
                this.tentativa = 3;
                this._iniciErro();
            }


        }
        return this;
    }


    tentativa3() {
        if (this.tentativa === 3) {
            if (this._erro3 !== 0) {
                this._erro3--;
                this.email = `${this.retidaraDePalavrasMenoresQueTres[0].string}-${this.retidaraDePalavrasMenoresQueTres[this._erro].string}`;
                this._erro--;

            } else {
                this.tentativa = 4;
                this._iniciErro();
            }


        }
        return this;
    }

    tentativa4() {
        if (this.tentativa === 4) {
            if (this.retidaraDePalavrasMenoresQueTres.length === 1) {
                this.email = `${this.retidaraDePalavrasMenoresQueTres[0].string}${this.count}`;
                this.count++;
                return this;
            }
            //     console.log('team', this.retidaraDePalavrasMenoresQueTres.length);
            if (this._erro4 !== 0) {
                this._iniciErro();
                this._erro4 = this.retidaraDePalavrasMenoresQueTres.length - 1;
                this.count++;

            }
            this._erro4--;

            this.email = `${this.retidaraDePalavrasMenoresQueTres[0].string}.${this.retidaraDePalavrasMenoresQueTres[this._erro].string}${this.count}`;
            this._erro--;

        }
        return this;
    }

    _tentativa5() {
        if (this.tentativa === 5) {
            if (this._erro2 < this.retidaraDePalavrasMenoresQueTres.length) {
                let ff;
                if (this.retidaraDePalavrasMenoresQueTres[this._erro].string.slice(0, this.tamanhoDaFrente).length >= this.retidaraDePalavrasMenoresQueTres[this._erro].string.length - 1) {
                    this._erro++;
                    this._erro2++;
                    this.tamanhoDaFrente = 1
                } else {
                    ff = this.retidaraDePalavrasMenoresQueTres[this._erro].string.slice(0, this.tamanhoDaFrente);
                    this.tamanhoDaFrente++;
                    this.email = `${ff}${this.retidaraDePalavrasMenoresQueTres[0].string}.${this.retidaraDePalavrasMenoresQueTres[this._erro].string}`;
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

            this.email = `${this.retidaraDePalavrasMenoresQueTres[0].string.slice(0, 1)}.${this.menorSobrenome.string}${this.count}`;
            this.count++;

        }
        return this;

    }

    _format(nome) {
        const nomeMinuscule = nome.toLowerCase();
        const tiraAcento = retiraAcentos(nomeMinuscule);
        return tiraAcento.split(" ");

    }
    _iniciErro() {
        this._erro = this.retidaraDePalavrasMenoresQueTres.length - 1;
    }

    _iniciErros() {
        this._erro1 = this.retidaraDePalavrasMenoresQueTres.length - 1;
        this._erro2 = this.retidaraDePalavrasMenoresQueTres.length - 1;
        this._erro3 = this.retidaraDePalavrasMenoresQueTres.length - 1;
        this._erro4 = this.retidaraDePalavrasMenoresQueTres.length - 1;
    }
}


module.exports = Gerador;
