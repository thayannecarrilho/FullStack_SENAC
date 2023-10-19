/*9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console*/


let operat= prompt(`Digite opção para solicitar a operção:\na) Adição\nb)- Subtração\nc)- Multiplicação\nd)- Divisão`)
let n1 = Number(prompt(`Digite um número:`))
let n2 = Number(prompt(`Digite outro número:`))


switch (operat) {
    case "a":
        console.log(`${n1} + ${n2} = ${n1+n2}`)
        break;
    case "b":
        console.log(`${n1} - ${n2} = ${n1-n2}`)
        break;
    case "c":
        console.log(`${n1} x ${n2} = ${n1*n2}`)
        break;
    case "d":
        console.log(`${n1} dividido por ${n2} = ${n1/n2}`)
        break;
}


