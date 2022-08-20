const prompt = require("prompt-sync")();

let operation = 0
while (operation != "n") {
    console.log("Programa para calcular média dos alunos!")

    operation = prompt("Entrar no sistema? s ou n : ");

    if (operation == "n") {
        console.log("Obrigado por participar!")
        break
    }

    firstNote = parseInt(prompt("Digite a primeira nota: "))
    secundNote = parseInt(prompt("Digite a segunda nota : "))
    thirdNote = parseInt(prompt("Digite a terceira nota : "))

    media = (firstNote + secundNote + thirdNote) / 3
    result = (media >= 7 ? 'Aprovado' : 'Reprovado')

    console.log("O resultado do aluno é: " + result + "")
}