/***
 * Desafio fizzbuzz
 * 
 * Escreva uma lib que recebaq um número e:
 * 
 * Se o número for divisivel por 3, no lugar escreva 'Fizz'
 * Se o número for divisivel por 5, no lugar escreva 'Buzz'
 * Se o número for divisivel por 3 e por 5, no lugar escreva 'FizzBuzz'
 * Se não for múltiplo de nada, retorna o número
 * 
 */

import {FizzBuzz} from '../src/fizzbuzz.js'


describe('Main',()=>{
  it('Should return Fizz when multiple of 3',()=>{
    expect(FizzBuzz(3)).toBe("Fizz")
  })
})