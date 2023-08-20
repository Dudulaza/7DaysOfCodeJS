let tentativas = 3;
const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);

while (tentativas > 0) {
  const pergunta = parseInt(prompt("Tente advinhar um número de 0 a 10."));

  if (pergunta === numero) {
    alert("Parabéns! Você acertou!");
    break;
  } else {
    tentativas--;
    if (tentativas > 0) {
      alert(`Que pena, tente novamente. Restam ${tentativas} tentativas.`);
    } else {
      alert(`Fim de jogo! O número misterioso era ${numero}!`);
    }
  }
}
