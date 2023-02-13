// describe('nome da classe', function () {
//   //Aqui roda-se os testes.


//   describe('method A', function () {
//     context('Case 1', function () {
//       it.skip('Should happen something', function () {
//         // Espera que algo aconteça
//         // Entrada de dados / método soma(2,2)
//         // Espera retornar / (4) => true | (3) => (false) broken test
//         throw new Error('Just an error')
//       })
//     })
    
//     context.skip('Case 2', function () {
//       it('Should happen something else', function () {
//         throw new Error('Just an error')
//       })
//     })
//   })

//   describe('method B', function () {
//     context('Case 1', function () {
//       it('Should happen something to case 1 of method B', function () { })
//     })
//   })
// })

describe('Main', function(){

  // Hooks

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