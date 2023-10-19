/* 7. Escreva um programa que defina uma variável para armazenar o valor de um produto com desconto e exiba o valor original e o valor com desconto no console.

   O programa deve receber o valor original de um produto e o desconto a ser aplicado sobre ele, calcular o valor com desconto e exibir tanto o valor original quanto o valor com desconto no console*/

   let Iphone15 = 8900
   let desconto = ((Iphone15 * 10) / 100)
   let valordesconto = Iphone15 - desconto
   console.log(`Parcele em até 10x e pague: ${Iphone15.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
   console.log(`Ou pague à vista com 10% de desconto: ${valordesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
   