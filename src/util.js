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
module.exports.retirarPalavrasMenorTres = function (palavra) {

    return palavra.filter(string => {
        return string.length > 3;
    }).map(Element => {
        return {tamanho: Element.length, string: Element};
    });
};

module.exports.stringSemPrimeiraPalavra = function (palavra) {
    return palavra.filter(string => {
        return palavra[0].string !== string.string;
    });
};

module.exports.menorPalavra = function (palavra) {
    return palavra.reduce((previous, current) => {
        if (previous.string.length > current.string.length)
            return current;
        return previous;
    });
};