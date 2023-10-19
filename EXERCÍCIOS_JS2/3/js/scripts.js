/*3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console*/

let number = parseInt(prompt(`Digite um número:`))

for (n = 1; n <= number; n = n+1){
    if (n % 2 == 0) {
        console.log(n)
    }
}
