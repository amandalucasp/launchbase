const nome = "Maria";
const sexo = "F";
const idade = 50;
const contribuicao = 35;

const soma = idade + contribuicao

if ( (sexo === "F" && contribuicao >= 30 && soma >= 85) || (sexo === "M" && contribuicao >= 35 && soma >= 95) ) {
        console.log(`${nome}, você pode se aposentar.`)
} else {
        console.log(`${nome}, você NÃO pode se aposentar.`)
}