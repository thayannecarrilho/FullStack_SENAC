/*8. Escreva um programa que defina uma variável do tipo null para representar um valor ausente em um campo de um formulário e exiba uma mensagem de alerta no console caso o usuário deixe o campo em branco.

   O programa deve definir uma variável do tipo null para representar um valor ausente em um campo de um formulário. Caso o usuário deixe o campo em branco, uma mensagem de alerta deve ser exibida no console*/

   let form = Number(prompt("CPF*:"))
   
   if (form == " ") {
     console.log("Campo obrigatório, por favor, preencher com 11 dígitos!")
   } 

   else {
    console.log(`Campo preenchido: ${form}`)
   }

   
