// PARTE 1 

const usuarios = [
    { nome: "Fulana", tecnologias: ["C#", "Java"] },
    { nome: "José", tecnologias: ["JavaScript", "HTML", "Node.js", "CSS"] },
    { nome: "Luiza", tecnologias: ["Python", "C++"] }
  ];

// for (let i = 0; i < usuarios.length; i++) {
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
// }

// PARTE 2

function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++){
        if (usuario.tecnologias[i] === "CSS")
            return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }