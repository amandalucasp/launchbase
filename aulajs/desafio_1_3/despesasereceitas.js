const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

function somaNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return soma;
}

function calculaSaldo(receitas, despesas) {
    return somaNumeros(receitas) - somaNumeros(despesas);
}

const saldos = [
    calculaSaldo(usuarios[0].receitas, usuarios[0].despesas),
    calculaSaldo(usuarios[1].receitas, usuarios[1].despesas),
    calculaSaldo(usuarios[2].receitas, usuarios[2].despesas)
];

for (let i = 0; i < usuarios.length; i++){
    if (saldos[i] >= 0){
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldos[i]}`)
    } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldos[i]}`)
    }
        
}