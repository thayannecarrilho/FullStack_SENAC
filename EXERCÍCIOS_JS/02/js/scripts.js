/*2. Escreva um programa que defina uma variável com o nome de um produto e exiba seu nome no console.
    
    O programa deve definir uma variável com o nome de um produto, atribuir um valor a ela e exibir o valor da variável no console*/

//Tipo 1
let product = String(prompt("Digite o nome do produto desejado:"))
console.log(`Você digitou: ${product}`)

//Tipo2
const product1 = "Geladeira"
console.log(product1)

//Tipo3
let prod1 = prompt("Digite o produto que deseja saber o valor:\n- Geladeira\n- Fogão\n- Sofá")
if(prod1 ==="Geladeira") {
    console.log("Geladeira = R$ 3.500,00")
}
if(prod1 === "Fogão") {
    console.log("Fogão = R$ 1.200,00")
    alert("Fogão = R$ 1.200,00")
}
if(prod1 === "Sofá") {
    console.log("Sofá = R$ 1.000,00")
    alert("Sofá = R$ 1.000,00")
}
else {
    console.log("Produto Inválido")
    alert("Produto Inválido")
}