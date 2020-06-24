/* ====================================
Operadores de comparação 

> maior
< menor
>= maior igual 
<= menor igual
== igual 
=== igual e do mesmo tipo
!= diferente
!== diferente, inclusive do tipo

==================================== */

// // DESAFIO 1
// const idade = 17
// // verificar se a pessoa é maior igual a 18 anos
// // se sim, deixar entrar, se não, bloquear a entrada
// if (idade >= 18 ) {
//     console.log("Deixar entrar")
// } else {
//     console.log("Bloquear a entrada")
// }
// // se a pessoa tiver 17 anos
// // avisar pra voltar quando fizer 18 anos
// if (idade === 17) {
//     console.log("Volte quando tiver 18 anos")
// }

/* ====================================
Operadores lógicos
==================================== */

// DESAFIO 1
const idade = 17
// verificar se a pessoa é maior igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if (!(idade >= 18) || idade === 17 ) {
    console.log("Bloquear a entrada")
} else {
    console.log("Deixar entrar")
}

/* ====================================
Operadores artiméticos
==================================== */

