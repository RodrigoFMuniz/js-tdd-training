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
          it('Should happen something', function(){
          // Espera que algo aconteça
          // Entrada de dados / método soma(2,2)
          // Espera retornar / (4) => true | (3) => (false) broken test
          })
        })

        context('Case 2', function(){
          it('Should happen something else', function(){})
        })
      })

      describe('method B', function(){
        context('Case 1', function(){
          it('Should happen something to case 1 of method B', function(){})
        })
      })
    })

### Reporters

> Mudam a apresentação dos resultados

- Apresenta as opções de reporters: `npm test -- --reporter=dot ` 

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


- Escolhe uma das opções possíveis:  `npm test -- --reporter=nyan`

      > testes_unitarios@1.0.0 test
      > .\node_modules\.bin\mocha tests\**\*.spec.js --reporter=nyan

      3   -_-__,------,
      0   -_-__|  /\_/\ 
      0   -_-_~|_( ^ .^) 
          -_-_ ""  "" 

        3 passing (15ms)


### Bail
> Reporta a primeira falha e pára o processo de análise:   `npm test -- --bail`

    > testes_unitarios@1.0.0 test
    > .\node_modules\.bin\mocha tests\**\*.spec.js --bail



      nome da classe
        method A
          Case 1
            1) Should happen something


      0 passing (7ms)
      1 failing

      1) nome da classe method A Case 1 Should happen something:
        Error: Just an error
          at Context.<anonymous> (tests\main.spec.js:10:15)
          at process.processImmediate (node:internal/timers:476:21)

### Only
> Executa o contexto que posuir a sintaxe `context.only`

    context.only('Case 2', function () {
      it('Should happen something else', function () {
        throw new Error('Just an error')
      })
    })

      -----------------------------------
    >> npm test

    > testes_unitarios@1.0.0 test
    > .\node_modules\.bin\mocha tests\**\*.spec.js



      nome da classe
        method A
          Case 2
            1) Should happen something else


      0 passing (7ms)
      1 failing

      1) nome da classe method A Case 2 Should happen something else:
        Error: Just an error
          at Context.<anonymous> (tests\main.spec.js:16:15)
          at process.processImmediate (node:internal/timers:476:21)

### Skip
> Ignora os testes com esta diretiva(método) / Oposto ao only / Funciona no context inteiro, ou no it (teste específico)

    describe('method A', function () {
      context('Case 1', function () {
        it.skip('Should happen something', function () {
          // Espera que algo aconteça
          // Entrada de dados / método soma(2,2)
          // Espera retornar / (4) => true | (3) => (false) broken test
          throw new Error('Just an error')
        })
      })
      
      context.skip('Case 2', function () {
        it('Should happen something else', function () {
          throw new Error('Just an error')
        })
      })
    })

    ---------------------------------------------
    >> npm test

    > testes_unitarios@1.0.0 test
    > .\node_modules\.bin\mocha tests\**\*.spec.js



      nome da classe
        method A
          Case 1
            - Should happen something
          Case 2
            - Should happen something else
        method B
          Case 1
            √ Should happen something to case 1 of method B


      1 passing (8ms)
      2 pending

### Hooks
> Uma chamada que ocorre a partir de algum momento. Diminui duplicatas / Criar métodos que são chamados antes de outros.

#### before
> roda uma vez, antes do bloco

      before(function(){

      })

#### after
> roda uma vez, depois do bloco

      after(function(){

      })

#### beforeEach
> roda todas as vezes, antes de cada bloco

      beforeEach(function(){})

#### afterEach
> roda todas as vezes, depois de cada bloco

      afterEach(function(){})


#### Use case

      describe('Main', function(){
        describe('method 1',function(){
          context('caso 1', function(){
            it('test1', function(){
              console.log('test 1')
            })
          })
          
          context('caso 2', function(){
            it('test2', function(){
              console.log('test 2')
            })
          })
        })

        // Hooks
        
        //roda uma vez, antes do bloco
        before(function(){
          console.log('Before')
        })
        // Roda uma vez, depois do bloco
        after(function(){
          console.log('After')
        })
        
        //roda todas as vezes, antes de cada bloco
        beforeEach(function(){
          console.log('Before Each')
        })
        
        //roda todas as vezes, depois de cada bloco
        afterEach(function(){
          console.log('After Each')
        })
      })
      ---------------------------------
      Return =>

      >> npm test

      > testes_unitarios@1.0.0 test
      > .\node_modules\.bin\mocha tests\**\*.spec.js



        Main
      Before
          method 1
            caso 1
      Before Each
      test 1
              √ test1
      After Each
            caso 2
      Before Each
      test 2
              √ test2
      After Each
      After


        2 passing (9ms)


#### Use case 2

      describe('Main', function () {

        let arr = []

          // Hooks

        //roda uma vez, antes do bloco
        before(function () {
          console.log('Before')
        })
        // Roda uma vez, depois do bloco
        after(function () {
          console.log('After')
        })

        //roda todas as vezes, antes de cada bloco
        beforeEach(function () {
          arr = [1, 2, 3]
          console.log('Before Each', arr)
        })

        //roda todas as vezes, depois de cada bloco
        afterEach(function () {
          console.log('After Each')
        })


        describe('method 1', function () {
          context('Pushing arrays', function () {
            it('Should have a size of 4 when pushing another a value to the array', function () {
              arr.push(4)
              console.log(arr.length)
            })
          })

          context('Popping arrays', function () {
            it('Should have a size of 2 when popping a value of array', function () {
              arr.pop()
              console.log(arr.length)
            })

            it('Should remove member 3 when popping the array', function () {
              console.log(arr.pop() === 3)
            })
          })
        })
      })

      -----------------------------------------

      > testes_unitarios@1.0.0 test
      > .\node_modules\.bin\mocha tests\**\*.spec.js



        Main
      Before
          method 1
            Pushing arrays
      Before Each [ 1, 2, 3 ]
      4
              √ Should have a size of 4 when pushing another a value to the array
      After Each
            Popping arrays
      Before Each [ 1, 2, 3 ]
      2
              √ Should have a size of 2 when popping a value of array
      After Each
      Before Each [ 1, 2, 3 ]
      true
              √ Should remove member 3 when popping the array
      After Each
      After


        3 passing (14ms)

## CHAI

> - Usando a interface expect, testa-se o Behavior(comportamento das funções). 
> - Existem três interfaces possíveis, Should, Expect e Assert. As duas primeiras tratam mais o comportamento, enquanto a última é mais focada em valores. 
> - Importam-se os recursos desssa maneira: `const expect = require('chai').expect`

### Exemplo de uso

      const expect = require('chai').expect

      describe('Main', function () {

        let arr = []

          // Hooks

        //roda uma vez, antes do bloco
        before(function () {
          console.log('Before')
        })
        // Roda uma vez, depois do bloco
        after(function () {
          console.log('After')
        })

        //roda todas as vezes, antes de cada bloco
        beforeEach(function () {
          arr = [1, 2, 3]
          console.log('Before Each', arr)
        })

        //roda todas as vezes, depois de cada bloco
        afterEach(function () {
          console.log('After Each')
        })


        describe('Testing arrays', function () {

          context('Pushing arrays', function () {
            it('Should have a size of 4 when pushing another a value to the array', function () {
              arr.push(4)
              expect(arr).to.have.lengthOf(4)
              console.log(arr.length)
            })
          })

          context('Popping arrays', function () {
            it('Should have a size of 2 when popping a value of array', function () {
              arr.pop()
              expect(arr).to.have.lengthOf(2)
              console.log(arr.length)
            })

            it('Should remove member 3 when popping the array', function () {
              // console.log(arr.pop() === 3)
              // expect(arr).not.contain(3)
              expect(arr.pop() === 3).to.be.true
            })
          })

          //Smoke test
          context('Checking type of arrays',function(){
            it('Should be an array',function(){
              expect(arr).to.be.a('array')
            })
          })
        })
      })


## Jest

### Instalando

> `npm i --save-dev jest`

### Config
      "scripts": {
        "test": ".\\node_modules\\.bin\\jest --watch"
      }

### Describe

    describe("Nome do teste",()=>{})

### Test

    test("Nome do teste",()=>{})
