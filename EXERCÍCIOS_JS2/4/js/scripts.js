/*4. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console*/

let n2 = parseInt(prompt(`Digite um número para apresentar sua tabuada:`))

for(let n1=1; n1<=10 ; n1++)
   console.log(`${n1} x ${n2} = ${n1*n2}`)