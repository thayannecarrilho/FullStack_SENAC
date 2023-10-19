/*7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console*/

let n1 =  parseInt(prompt(`Digite a nota 1:`))
let n2 =  parseInt(prompt(`Digite a nota 2:`))
let n3 =  parseInt(prompt(`Digite a nota 3:`))

let media = (n1 + n2 + n3)/3

if (media < 5) {
    console.log(`O aluno está reprovado com média ${media}!`)
} else if (media >= 5 && media < 7) {
    console.log(`O aluno está em recuperação com média ${media}`)
} else if (media >= 7) { 
    console.log(`O aluno está aprovado com media ${media}`)
}