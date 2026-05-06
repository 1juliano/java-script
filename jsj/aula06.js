const divListaAluno = document.querySelector("#lista_aluno")
let alunos = [

    {
        nome: "juliano",
        idade: 20
    },
    {
        nome: "alice",
        idade: 20
    },
    {
    nome: "bruna",
    idade:44
    },
    {
        nome: "carol",
        idade: 21
    },
    {
        nome: "doarda",
        idade: 19
    },
    {
        nome: "elen",
        idade: 18
    },
    {
        nome: "flavia",
        idade: 18
    },
    {
        nome: "gabi",
        idade: 22
    },
    {
        nome: "helena",
        idade: 21
    },
    {
        nome: "igrid",
        idade: 23
    },
    {
        nome: "juliana",
        idade: 22
    },
    {
        nome: "karol",
        idade: 24
    },
    {
        nome: "luana",
        idade: 22
    },
    {
        nome: "mirela",
        idade: 21
    },
    {
        nome: "nanda",
        idade: 21
    },
    {
        nome: "oscar",
        idade: 20
    },
    {
        nome: "patricia",
        idade: 19
    },
    {
        nome: "querolaini",
        idade: 19
    },
    {
        nome: "ravi",
        idade: 20
    },
    {
        nome: "santina",
        idade: 25
    },
    {
        nome: "tavi",
        idade: 18
    },
    {
        nome: "uva",
        idade: 22
    },
    {
        nome: "weslany",
        idade: 23
    },
    {
        nome: "xuxa",
        idade: 20
    },
    {
        nome: "zoro",
        idade: 20
    },
    {
        nome: "L",
        idade: 22
    },
    {
        nome: "Kira",
        idade: 19
    },
    {
        nome: "luffy",
        idade: 24
    },
    {
        nome: "sanji",
        idade: 22
    },
    {
        nome: "miwalk",
        idade: 21
    }
]
for (let i = 0; i < alunos.length; i++) {
    divListaAluno.innerHTML += `
        <li>${alunos[i].nome}, ${alunos[i].idade} anos</li
        
    `
    
}



