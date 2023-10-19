/*2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console*/

let number = parseInt(prompt(`Digite um número para saber se ele é ímpar ou par:`))

if (number % 2 == 0) {
    console.log(`O número ${number} é par!`)
} else {
    console.log(`O número ${number} é ímpar!`)
}