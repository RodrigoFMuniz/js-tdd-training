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

import {FizzBuzz} from './fizzbuzz.js'


describe('Main',()=>{
  it('Should be a Function',()=>{
    expect(FizzBuzz instanceof Function).toBeTruthy()
    expect(FizzBuzz).not.toBeNull()
    expect(FizzBuzz).toBeDefined()
    expect(FizzBuzz).not.toBeUndefined()
  })
  it('Should return Fizz when multiple of 3',()=>{
    expect(FizzBuzz(3)).toBe("Fizz")
    expect(FizzBuzz(30)).not.toBe("Fizz")
    expect(FizzBuzz(33)).toBe("Fizz")
    expect(FizzBuzz(39)).toBe("Fizz")
    expect(FizzBuzz(312)).toBe("Fizz")
  })

  it('Should return Buzz when multiple of 5',()=>{
    expect(FizzBuzz(5)).toBe('Buzz')
    expect(FizzBuzz(50)).toBe('Buzz')
    expect(FizzBuzz(35)).toBe('Buzz')
    expect(FizzBuzz(25)).toBe('Buzz')
    expect(FizzBuzz(95)).toBe('Buzz')
    expect(FizzBuzz(505)).toBe('Buzz')
  })

  it("Should return FizzBuzz when multiple of 3 and 5 at same time",()=>{
    expect(FizzBuzz(15)).toBe('FizzBuzz')
    expect(FizzBuzz(90)).toBe('FizzBuzz')
    expect(FizzBuzz(45)).toBe('FizzBuzz')
    expect(FizzBuzz(105)).toBe('FizzBuzz')
  })

  it("Should return value when not multiple of 3 and 5",()=>{
    expect(FizzBuzz(7)).toBe(7)
    expect(FizzBuzz(17)).toBe(17)
    expect(FizzBuzz(16)).toBe(16)
    expect(FizzBuzz(71)).toBe(71)
    expect(()=>FizzBuzz('ola')).toThrow(/^errrou/)
  })
  it("Should return an Error when value argument of FizzBuzz to be diferent of Number type",()=>{
    expect(()=>FizzBuzz('ola')).toThrow()
  })
})