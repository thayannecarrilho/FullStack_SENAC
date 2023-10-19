let numb = parseInt(prompt(`Digite um numero de 1 a 12:`))
const month = '0 Janeiro Fevereiro Março Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro';   

const contword = month.split(' ')
console.log(`O número ${numb} equivale ao mês de: ${contword[numb]}`)
document.write(`O número ${numb} equivale ao mês de: ${contword[numb]}`)


