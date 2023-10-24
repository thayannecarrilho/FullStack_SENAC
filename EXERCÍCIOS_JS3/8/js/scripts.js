/*8. Crie uma função chamada "verificaPrimo" que recebe um parâmetro "n1". A função deve verificar se o número recebido é primo e exibir uma mensagem no console informando se é ou não primo. Em seguida, chame a função "verificaPrimo" com diferentes valores para "num" e exiba o resultado no console.*/

let num = Number(prompt(`DIgite um numero:`))

function isPrime(n1) {
    if(n1 % 2 === 0) {
        console.log(`não é primo`)
    } else {
        console.log(`é primo`)
    }
}
          

  console.log(isPrime(num))