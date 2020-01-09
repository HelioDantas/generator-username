const {ok, deepEqual} = require('assert');


const Gerador = require('../src/gerador');


describe('Teste!', function () {


    it('Criar um usuario', async () => {
        const expected = 'helio.oliveira';
        const gerador = new Gerador();
        gerador.setNome('helio luiz de albuquerque oliveira', '1213124');
        const result = gerador.gerar();
        deepEqual(expected, result);
    })

    it('Criar um usuario segundo pedido', async () => {
        const expected = 'helio.albuquerque';
        const gerador = new Gerador();
        gerador.setNome('helio luiz de albuquerque oliveira', '1213124');
        gerador.gerar();
        const result = gerador.gerar();
        deepEqual(expected, result);
    })

    it('Criar um usuario terceiro pedido', async () => {
        const expected = 'helio.luiz';
        const gerador = new Gerador();
        gerador.setNome('helio luiz de albuquerque oliveira', '1213124');
        gerador.gerar();
        gerador.gerar();
        const result = gerador.gerar();
        deepEqual(expected, result);
    })


    it('Criar um usuario quarto pedido', async () => {
        const expected = 'helio_oliveira';
        const gerador = new Gerador();
        gerador.setNome('helio luiz de albuquerque oliveira');
        gerador.gerar();
        gerador.gerar();
        gerador.gerar();
        const result = gerador.gerar();
        deepEqual(expected, result);
    })

    it('Criar um usuario quarto 50', async () => {
        const expected = 'helio_oliveira';
        const gerador = new Gerador();
        gerador.setNome('VANDERLICE  DA SILVA NASCIMENTO');
        for (var i = 0; i < 50; i++) {
            const nome = gerador.gerar();
            console.log(nome);

        }
        const result = gerador.gerar();
        deepEqual(expected, result);
    })

    it('Criar um usuario quarto 100', async () => {
        const expected = 'helio_oliveira';
        const gerador = new Gerador();
        gerador.setNome('ANA KAROLINA MENDES ALVES');
        console.log(gerador);
        for (var i = 0; i < 100; i++) {
            const nome = gerador.gerar();
            console.log(nome);

        }
        const result = gerador.gerar();
        deepEqual(expected, result);
    })
});
