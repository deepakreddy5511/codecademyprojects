//This is the kelvin value
const kelvin = 0
//celsius is 273 less tham kelvin
const celsius = kelvin - 273
//formula for fahrenheit
var fahrenheit = celsius * (9/5) + 32
//this will round the decimal value
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
