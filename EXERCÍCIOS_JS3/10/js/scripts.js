/*10. Crie uma função chamada "imprimeTabuada" que recebe um parâmetro "num". A função deve imprimir no console a tabuada do número recebido, de 1 até 10. Em seguida, chame a função "imprimeTabuada" com diferentes valores para "num" e exiba o resultado no console.*/


let num = Number(prompt(`Digite um número para saber sua tabuada:`))

function imprmeTabuada(n1){
    for(i = 1; i <= 10; i++){
        console.log(`${i} x ${n1} = ${i*n1}`)
    }
}

console.log(imprmeTabuada(num))

