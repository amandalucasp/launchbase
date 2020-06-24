const programador = {
    nome: "Filadelfio",
    genero: "F",
    idade: 33,
    tecnologias: [
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: "Javascript",
            especialidade: "Web/Mobile"
        }
    ]
};

if (programador.genero == "F") {
    frase = "A usuária"
} else {
    frase = "O usuário"
}

console.log(`${frase} ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)