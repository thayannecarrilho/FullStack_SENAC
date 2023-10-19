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
   