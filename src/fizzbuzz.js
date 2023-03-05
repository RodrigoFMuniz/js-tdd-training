module.exports = {
  FizzBuzz: (value) => {
    if(typeof value !== 'number'){throw new Error('errrou')}
    if(value%3 === 0 && value%5 === 0) return 'FizzBuzz'
    if(value % 3 === 0) return 'Fizz' 
    if(value % 5 === 0) return 'Buzz'
    return value
  }
}
