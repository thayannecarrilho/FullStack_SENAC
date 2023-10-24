/*2. Crie uma função chamada "media" que recebe três parâmetros, "a", "b" e "c". A função deve calcular a média dos três valores e retornar o resultado. Em seguida, chame a função "media" com valores diferentes e exiba o resultado no console.*/

let a = Number(prompt(`Digite um número:`))
let b = Number(prompt(`Digite outro número:`))
let c = Number(prompt(`Digite outro número:`))

function media(n1,n2,n3){
    return (n1 + n2 + n3)/3
}

console.log(`A média dos valores ${a}, ${b} e ${c} é igual a ${media(a,b,c)}`)