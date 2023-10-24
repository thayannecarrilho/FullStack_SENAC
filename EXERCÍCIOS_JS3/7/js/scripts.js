/*7. Crie uma função chamada "calculaAreaRetangulo" que recebe dois parâmetros, "base" e "altura". A função deve calcular a área de um retângulo utilizando a fórmula "base x altura" e retornar o resultado. Em seguida, chame a função "calculaAreaRetangulo" com diferentes valores para "base" e "altura" e exiba o resultado no console.*/

let base = Number(prompt(`Digite a base:`))
let altura = Number(prompt(`Digite a altura:`))

function areaRetangulo(n1,n2){
    return n1 * n2
}

console.log(`A área do retângulo é igual a ${areaRetangulo(base,altura)}`)