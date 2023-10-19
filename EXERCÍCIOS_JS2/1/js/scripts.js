/*1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console*/

let n1 = parseInt(prompt(`Digite um número:`))
let n2 = parseInt(prompt(`Digite outro número:`))

if(n1 > n2) {
    console.log(`O número ${n1} é maior que ${n2}`)
} else if (n2 > n2) {
    console.log(`O número ${n2} é maior que ${n1}`)
} else if (n1 === n2) {
    console.log(`Os números são iguais! Digite números diferentes!`)
} 
