/*5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console*/

let number = prompt(`Digite um número:`)

if (number >= 1) {
    console.log(`O número ${number} é positivo`)
} else if (number <= -1) {
    console.log(`O número ${number} é negativo`)
} else if (number == 0) {
    console.log(`O número ${number} é igual a 0`)
}