/*3. Crie uma função chamada "maiorValor" que recebe três parâmetros, "a", "b" e "c". A função deve retornar o maior valor entre os três. Em seguida, chame a função "maiorValor" com valores diferentes e exiba o resultado no console.*/

let a = Number(prompt(`Digite um número:`))
let b = Number(prompt(`Digite outro número:`))
let c = Number(prompt(`Digite outro número:`))

function maiorValor(n1,n2,n3){
    if(n1>n2 && n1>n3){
        return n1
    } else if(n2>n1 && n2>n3){
        return n2
    } else {
        return n3
    }
}

console.log(`O maior valor entre ${a}, ${b}, ${c} é ${maiorValor(a,b,c)}`)
