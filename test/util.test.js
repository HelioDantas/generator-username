const {ok, deepEqual} = require('assert');


const Util = require('../src/util');


describe('Teste!', function () {


    it('Criar um usuario', async () => {
        const expected = [{tamanho: 3, string: 'ana'},
            {tamanho: 4, string: 'luiz'},
            {tamanho: 11, string: 'albuquerque'},
            {tamanho: 8, string: 'oliveira'}];
        const gerador = Util.retirarPalavrasMenorTres(['ana', 'luiz', 'de', 'albuquerque', 'oliveira']);
        const result = gerador;
        console.log(gerador);
        deepEqual(expected, result);
    })


    it('Quantidade de sobrenome', async () => {
        const expected = ['luiz', 'albuquerque', 'oliveira'];
        const gerador = Util.Sobrenomes(['ana', 'luiz', 'de', 'albuquerque', 'oliveira']);
        const result = gerador;
        console.log(gerador);
        deepEqual(expected, result);
    })
});
