/* 1. Escreva um programa que calcule o dobro de um número e exiba o resultado no console.

     O programa deve receber um número como entrada, multiplicá-lo por dois e exibir o resultado no console*/

 let value = Number.parseFloat(prompt("Digite um valor para saber seu dobro:"))
 let double = value * 2
 console.log(`O dobro de ${value} é ${double}`)
 alert(`O dobro de ${value} é ${double}`)

/*2. Escreva um programa que defina uma variável com o nome de um produto e exiba seu nome no console.
    
    O programa deve definir uma variável com o nome de um produto, atribuir um valor a ela e exibir o valor da variável no console*/

//Tipo 1
let product = String(prompt("Digite o nome do produto desejado:"))
console.log(`Você digitou: ${product}`)
alert(`Você digitou: ${product}`)

//Tipo2
const product1 = "Geladeira"
console.log(product1)
alert(product1)

/*3. Escreva um programa que defina uma variável booleana para representar se um usuário está logado em um aplicativo. Exiba uma mensagem de boas-vindas personalizada no console, dependendo do valor da variável.

   O programa deve definir uma variável booleana para representar se o usuário está logado ou não. Dependendo do valor da variável, o programa deve exibir uma mensagem de boas-vindas personalizada no console*/

let login = prompt("Digite seu Usuário:")
if (login === "Thayanne Carrilho") {
  console.log("Seja bem-vindo! Você está logado no aplicativo.");
  alert("Seja bem-vindo! Você está logado no aplicativo.")
} 
else {
  console.log("Por favor, faça login para acessar o aplicativo.");
  alert("Por favor, faça login para acessar o aplicativo.")
}

/*4. Escreva um programa que defina uma variável para armazenar a idade de uma pessoa e exiba uma mensagem informando se ela é maior de idade ou não.

   O programa deve receber a idade de uma pessoa como entrada, armazená-la em uma variável e exibir uma mensagem informando se a pessoa é maior de idade ou não no console*/

let age = Number(prompt("Digite sua idade:"))
if(age >= 18 ) {
    console.log("Maior de idade")
    alert("Maior de idade")
}
else {
    console.log("Menor de idade!")
    alert("Menor de idade!")
}

/*5. Escreva um programa que defina uma variável do tipo string com o nome de uma cidade e exiba uma mensagem informando o nome e o estado da cidade no console.

   O programa deve definir uma variável do tipo string com o nome de uma cidade e exibir uma mensagem informando o nome e o estado da cidade no console. Essa mensagem pode ser formatada de acordo com o padrão utilizado na região em que a cidade está localizada*/

let cidade = "Manaus"
let estado = "Amazonas"
console.log(cidade + " - " + estado)



/*let product = prompt("Digite o produto que deseja saber o valor:\n- Geladeira\n- Fogão\n- Sofá")
if(product ==="Geladeira") {
    console.log("Geladeira = R$ 3.500,00")
}
if(product === "Fogão") {
    console.log("Fogão = R$ 1.200,00")
    alert("Fogão = R$ 1.200,00")
}
if(product === "Sofá") {
    console.log("Sofá = R$ 1.000,00")
    alert("Sofá = R$ 1.000,00")
}
else {
    console.log("Produto Inválido")
    alert("Produto Inválido")
}





   





