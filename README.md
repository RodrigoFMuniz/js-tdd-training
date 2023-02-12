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
