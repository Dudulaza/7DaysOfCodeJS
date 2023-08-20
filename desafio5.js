let frutas = [];
let congelados = [];
let leites = [];
let outros = [];

let pergunta = prompt("Você deseja adicionar alguma comida na sua lista de compras? Digite sim ou não");

while(pergunta == "sim"){
  let addComida = prompt("Qual alimento gostaria de adicionar?");
  let categoria = prompt(`Ok! Digite em qual categoria deseja adicionar "${addComida}": Frutas, Congelados, Perecíveis ou Outros.`);

  if (categoria == "Frutas"){
    frutas.push(addComida);
    alert(`O item ${addComida} foi adicionado a ${categoria}. `);
  } else if (categoria == "Congelados"){
    congelados.push(addComida);
    alert(`O item ${addComida} foi adicionado a ${categoria}. `);
  } else if (categoria == "Perecíveis"){
    leites.push(addComida);
      alert(`O item ${addComida} foi adicionado a ${categoria}. `);
  } else if (categoria == "Outros"){
    outros.push(addComida);
    alert(`O item ${addComida} foi adicionado a ${categoria}. `);
  } else {
    alert("Você não inseriu uma categoria valida, digite: Frutas, Congelados, Perecíveis ou Outros. ");
  }
  pergunta = prompt("Você deseja adicionar mais algum item na sua lista de compras? Digite sim ou não");
}

if (pergunta == "não"){
  alert("Beleza, sua lista de compras está pronta, boas compras!")
}

alert(`LISTA DE COMPRAS : \n Frutas: ${frutas}  \n Congelados: ${congelados} \n Leites: ${leites} \n Outros: ${outros}`);
