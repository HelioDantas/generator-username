module.exports.retiraAcentos = function (str) {

    const com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
    const sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    let novas = "";
    for (let i = 0; i < str.length; i++) {
        let troca = false;
        for (let a = 0; a < com_acento.length; a++) {
            if (str.substr(i, 1) === com_acento.substr(a, 1)) {
                novas += sem_acento.substr(a, 1);
                troca = true;
                break;
            }
        }
        if (troca === false) {
            novas += str.substr(i, 1);
        }
    }
    return novas;
};

module.exports.retirarPalavrasMenorTres = function (nomes) {
    nomesCopy = [...nomes];

    const primeiroNome = nomes[0];
    const ultimoSobrenome = nomes.pop();

    const nomesComTamMaiorQue3 = nomes.filter(nome => {
        if (nome === primeiroNome) return nome;
        return nome.length > 3
    });

    nomesComTamMaiorQue3.push(ultimoSobrenome);
    return nomesComTamMaiorQue3.map(sobrenome => {
        return {tamanho: sobrenome.length, string: sobrenome};
    });
};

module.exports.stringSemPrimeiraPalavra = function (nomes) {
    nomesCopy = [...nomes];
    nomesCopy.shift();
    return nomesCopy;
};

module.exports.menorPalavra = function (names) {
    if (names.length === 0) {
       return '';
    }
    return names.reduce((previous, current) => {
        if (previous.length > current.string.length)
            return current.string;
        return previous;
    });
};
