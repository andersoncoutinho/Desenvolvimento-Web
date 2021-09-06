let peso1 = 1.0
const peso2 = Number("1.0")

console.log(peso1==peso2)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.23
const avaliacao2 = 9.4

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())

console.log(7 / 0) // em JS não dá erro, dá infinito
console.log("  9  "/2) // desde que a string seja numerica pode ser tratada como um numero e não considera espaços
console.log(0.1 + 0.7) // precisão ruim
console.log((0.1 + 0.7).toFixed(2))
// console.log(10.toString) NÃO FUNCIONA
console.log((10).toString()) // o '10' deve ser colocado entre parenteses
console.log(typeof Number) // Number é do tipo função
console.log(typeof Math) // Math é um objeto
