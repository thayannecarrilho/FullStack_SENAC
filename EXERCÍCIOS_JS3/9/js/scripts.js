/*9. Crie uma função chamada "concatenaTexto" que recebe dois parâmetros, "texto1" e "texto2". A função deve concatenar os dois textos recebidos e retornar o resultado. Em seguida, chame a função "concatenaTexto" com diferentes valores para "texto1" e "texto2" e exiba o resultado no console.*/

let nome = prompt(`Digite seu nome:`)
let sobrenome = prompt(`Digite seu sobrenome:`)

function concatenaTexto(n1,n2){
    return n1 + " " + n2
}

console.log(concatenaTexto(nome,sobrenome))