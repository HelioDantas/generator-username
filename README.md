# generator-username

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]


A library para criação de userName.


## Installation and Usage



Install the library with `npm i generator-username`

```javascript
const Gerador = require('generator-username');
        
const gerador = new Gerador();
gerador.setNome('helio luiz de albuquerque oliveira');
const userName = gerador.gerar();
console.log(userName);
   
   /* 
   helio.luiz
   */
```

Segunda tentativa

```javascript
const Gerador = require('generator-username');
        
const gerador = new Gerador();
gerador.setNome('helio luiz de albuquerque oliveira');
gerador.gerar();
const userName = gerador.gerar();
console.log(userName);
   
   /* 
   helio.albuquerque
   */
```


### Regras
```
- 1 : userName sepador por ponto
     Exemplo: helio.oliveira
     
- 2 : userName sepador por underline
     Exemplo: helio_oliveira
     
- 3 : userName sepador por traço
     Exemplo: helio-oliveira

-  :4 userName sepador por ponto mais numero que ira crescer quantas vezes o chamar
     Exemplo: helio-oliveira1
     
```







## Maintainers

- [Helio](https://github.com/HelioDantas) - **Helio Dantas** (author)



## License (ISN)
```
Copyright (c) 2019 Helio Dantas <helio_dantas@outlook.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[downloads-image]: http://img.shields.io/npm/dm/generator-username.svg
[npm-url]: https://www.npmjs.com/package/generator-username
[npm-image]: https://img.shields.io/npm/v/generator-username.svg
    
[mongoid]: http://docs.mongodb.org/manual/reference/object-id/
[ISIN]: https://en.wikipedia.org/wiki/International_Securities_Identification_Number
