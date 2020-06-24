const name = "Maria";
const peso = 94;
const altura = 1.66;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${name}, você está acima do peso.`)
} else {
    console.log(`${name}, você não está acima do peso.`)

}