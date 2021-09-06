const escola = "Cod3r"

console.log(escola.charAt(2))
console.log(escola.charCodeAt(3)) // valor na tabela unicode
console.log(escola.indexOf('C'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

testeArray = 'Ana,Maria,Pedro'.split(',')


for(i = 0; i < testeArray; i++) {
    console.log(testeArray[i])
}

const nome = "Anderson"
const template1 = `
                    Olá, 
                        ${nome}
                                !
                                    `
const template2 = `Olá, ${nome}!`
console.log(template1)
console.log(template2)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)

console.log(!!'0')