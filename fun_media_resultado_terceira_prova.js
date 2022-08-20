const prompt = require("prompt-sync")();


let operation = 0
while (operation != "n") {
    console.log("Programa para informa quanto falta para passar na terceira prova")

    operation = prompt("Entrar no sistema? s ou n : ");

    if (operation == "n") {
        console.log("Finalizando programa!")
        break
    }

    firstNote = parseInt(prompt("Digite a primeira nota: "))
    secundNote = parseInt(prompt("Digite a segunda nota : "))


    media = (firstNote + secundNote) / 2
    if (media < 7) {
        recovery = 7 - media;
        if (recovery == 1) {
            console.log("Você precisa de " + recovery + " ponto na próxima prova")
        }
        else {
            console.log("Você precisa de " + recovery + " pontos na próxima prova")
        }
    }
    else {
        console.log("Aluno aprovado")
    }
}