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