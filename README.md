# Testes em JS

## Mocha

### Describe
> Descreve os testes de um certo aruivo, módulo, método ou função.

    describe('nome da classe',function(){
      //Aqui roda-se os testes.

      describe('method A', function(){})

      describe('method B', function(){})
    })

### Context
> Separa os casos de testes

    describe('nome da classe',function(){
      //Aqui roda-se os testes.

      describe('method A', function(){
        context('Case 1', function(){})

        context('Case 2', function(){})
      })

      describe('method B', function(){
        context('Case 1', function(){})
      })
    })

### It
> Executa o comando de teste

    describe('nome da classe',function(){
      //Aqui roda-se os testes.

      describe('method A', function(){
        context('Case 1', function(){
          it('Should happen something')
          // Espera que algo aconteça
          // Entrada de dados / método soma(2,2)
          // Espera retornar / (4) => true | (3) => (false) broken test
        })

        context('Case 2', function(){
          it('Should happen something else)
        })
      })

      describe('method B', function(){
        context('Case 1', function(){
          it('Should happen something to case 1 of method B')
        })
      })
    })

### Reporters

> Mudam a apresentação dos reultados

- Apresenta as opções de reporters `npm test -- --reporter=dot ` 

      > .\node_modules\.bin\mocha tests\**\*.spec.js --reporters


        dot - dot matrix
        doc - html documentation
        spec - hierarchical spec list
        json - single json object
        progress - progress bar
        list - spec-style listing
        tap - test-anything-protocol
        landing - unicode landing strip
        xunit - xunit reporter
        min - minimal reporter (great with --watch)
        json-stream - newline delimited json events
        markdown - markdown documentation (github flavour)
        nyan - nyan cat!


- Escolhe uma das opções possíveis  `npm test -- --reporter=nyan`

      > testes_unitarios@1.0.0 test
      > .\node_modules\.bin\mocha tests\**\*.spec.js --reporter=nyan

      0   -_-__,------,
      0   -_-__|  /\_/\ 
      3   -_-_~|_( o .o) 
          -_-_ ""  "" 

        0 passing (14ms)
        3 pending