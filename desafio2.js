const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

//Resposta
const pergunta = prompt (`${nome}, você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (pergunta == 1){
  alert("Que legal, continue assim e não perca o foco.");
}
if (pergunta == 2){
  alert("Mesmo que não goste não perca o foco dos seus objetivos, mas tente aprender outras linguagens quem sabe se dê melhor.")
}

