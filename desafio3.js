const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const firstpergunta = prompt(`Olá ${nome}, você gostaria de seguir para a área Front-End ou Back-End?`);

let linguagem = "";
if (firstpergunta === "Front-End"){
  linguagem = prompt("Você gostaria de aprender React ou Vue?");
}else if (firstpergunta == "Back-End"){
  linguagem = prompt("Você gostaria de aprender C# ou java?");
} else{
  alert("Você não inseriu uma área valida digite: `Front-End` ou `Back-End`")
}

const caminhousuario = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");

if (caminhousuario == 1){
  alert(`Continue se especializando em ${linguagem} para dominar a área de ${firstpergunta}!`);
}else if (caminhousuario == 2){
  alert(`Esse é o momento para você aprender outras linguagens além de ${linguagem}.`);
}else {
  alert("Você não inseriu um valor válido!");
}


const perguntawhile = prompt(`${nome}, teria outras tecnologias você gostaria de se especializar ou conhecer? (digite "ok" caso queira).`);

let conhecimento = 0
while (conhecimento < 8){
  if(perguntawhile === "ok"){
    prompt("Qual?");
  }
  alert("Que legal, espero que te agregue de muitas formas!");
}