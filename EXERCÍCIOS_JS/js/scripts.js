/* 1. Escreva um programa que calcule o dobro de um número e exiba o resultado no console.

     O programa deve receber um número como entrada, multiplicá-lo por dois e exibir o resultado no console*/

 let value = Number.parseFloat(prompt("Digite um valor para saber seu dobro:"))
 let double = value * 2
 console.log(`O dobro de ${value} é ${double}`)

/*2. Escreva um programa que defina uma variável com o nome de um produto e exiba seu nome no console.
    
    O programa deve definir uma variável com o nome de um produto, atribuir um valor a ela e exibir o valor da variável no console*/

//Tipo 1
let product = String(prompt("Digite o nome do produto desejado:"))
console.log(`Você digitou: ${product}`)

//Tipo2
const product1 = "Geladeira"
console.log(product1)

/*3. Escreva um programa que defina uma variável booleana para representar se um usuário está logado em um aplicativo. Exiba uma mensagem de boas-vindas personalizada no console, dependendo do valor da variável.

   O programa deve definir uma variável booleana para representar se o usuário está logado ou não. Dependendo do valor da variável, o programa deve exibir uma mensagem de boas-vindas personalizada no console*/

   //Tipo 1
let login1 = true
if (login1 === true) {
    console.log("Seja bem-vindo! Você está logado no aplicativo.");
} 
else {
    console.log("Por favor, faça login para acessar o aplicativo.");
}

//Tipo2
let login = prompt("Digite seu Usuário:")
if (login === "Thaycarrilho") {
  console.log("Seja bem-vindo! Você está logado no aplicativo.");
} 
else {
  console.log("Por favor, faça login para acessar o aplicativo.");
}

/*4. Escreva um programa que defina uma variável para armazenar a idade de uma pessoa e exiba uma mensagem informando se ela é maior de idade ou não.

   O programa deve receber a idade de uma pessoa como entrada, armazená-la em uma variável e exibir uma mensagem informando se a pessoa é maior de idade ou não no console*/

let age = Number(prompt("Digite sua idade:"))
if(age >= 18 ) {
    console.log("Maior de idade")
}
else {
    console.log("Menor de idade!")
}

/*5. Escreva um programa que defina uma variável do tipo string com o nome de uma cidade e exiba uma mensagem informando o nome e o estado da cidade no console.

   O programa deve definir uma variável do tipo string com o nome de uma cidade e exibir uma mensagem informando o nome e o estado da cidade no console. Essa mensagem pode ser formatada de acordo com o padrão utilizado na região em que a cidade está localizada*/

let cidade = "Manaus"
let estado = "Amazonas"
console.log(cidade + " - " + estado)

/*6. Escreva um programa que defina uma variável do tipo objeto para armazenar informações de um livro, como título, autor e número de páginas. Utilize o operador de atribuição (=) para definir suas propriedades e exiba o objeto resultante no console.

   O programa deve definir uma variável do tipo objeto para armazenar informações sobre um livro, como título, autor e número de páginas. As propriedades do objeto devem ser definidas utilizando o operador de atribuição (=) e o objeto resultante deve ser exibido no console*/

   const book = {
    title : "A história de Thay",
    author : "Thayanne",
    npages : "100 páginas",
   }
   console.log(book)

/* 7. Escreva um programa que defina uma variável para armazenar o valor de um produto com desconto e exiba o valor original e o valor com desconto no console.

   O programa deve receber o valor original de um produto e o desconto a ser aplicado sobre ele, calcular o valor com desconto e exibir tanto o valor original quanto o valor com desconto no console*/

let Iphone15 = 8900
let desconto = ((Iphone15 * 10) / 100)
console.log("Parcele em até 10x e pague: R$" + Iphone15 + ",00")
console.log("Ou pague à vista com 10% de desconto: R$" + (Iphone15 - desconto) + ",00")

/*8. Escreva um programa que defina uma variável do tipo null para representar um valor ausente em um campo de um formulário e exiba uma mensagem de alerta no console caso o usuário deixe o campo em branco.

   O programa deve definir uma variável do tipo null para representar um valor ausente em um campo de um formulário. Caso o usuário deixe o campo em branco, uma mensagem de alerta deve ser exibida no console*/


let form = Number(prompt("CPF*:"))
if (form === null || form === "") {
  console.log("Campo obrigatório, por favor, preencher!")
  console.error("Campo obrigatório, por favor, preencher!")
} 
else {
  console.log("Campo preenchido: " + form)
}

/*9. Escreva um programa que defina uma variável para armazenar o nome e a idade de uma pessoa e exiba uma mensagem informando o nome e a idade no console.

   O programa deve receber o nome e a idade de uma pessoa como entrada, armazená-los em variáveis e exibir uma mensagem informando o nome e a idade da pessoa no console.*/

let name1 = String(prompt("Digite seu nome:"))
let age1 = String(prompt("Digite sua idade:"))
console.log("Nome: " + name1 + " / " + "Idade: " + age1)

/*10. Escreva um programa que defina uma variável para armazenar a temperatura em graus Celsius e converta-a para Fahrenheit. Exiba a temperatura em ambas as escalas no console.

   O programa deve receber a temperatura em graus Celsius como entrada, convertê-la para Fahrenheit utilizando a fórmula adequada e exibir a temperatura em ambas as escalas no console*/

let celsius = Number(prompt("Converta qualquer valor em Celsius para Fahrenheit: "))
let Fahrenheit = (celsius * 1.8) + 32
console.log("O valor de:" + celsius + "ºC" + " equivale a " + Fahrenheit + "ºF")










   





