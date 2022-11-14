let arrayDinamico = [2, 1, 2];

let portasAbertas = 0;

let valorArrayAnterior;

function gerarNumerosAleatorios() {
  return Math.floor(Math.random() * 3 + 1);
}

function retornoNumerosAleatorios(n) {
  arrayDinamico = [];

  for (let i = 0; i < n; ++i) {
    arrayDinamico.push(gerarNumerosAleatorios());
  }

  return arrayDinamico;
}

function gerarPortas() {
  for (i = 1; i <= 15; i++) {
    valorArrayAnterior = [...arrayDinamico];

    console.log(retornoNumerosAleatorios(3));

    const valoresIguais = (arrayDinamico) =>
      arrayDinamico.every((v) => v === arrayDinamico[0]);

    let retornoIguais = valoresIguais(arrayDinamico);

    if (retornoIguais === true) {
      portasAbertas++;

      console.log(`porta nº ${i} aberta`);
    } else if (arraysIguais(arrayDinamico, valorArrayAnterior) == true) {
      portasAbertas++;

      console.log(`porta nº ${i} aberta `);
    } else {
      console.log(`Porta nº ${i} bloqueada`);
    }
  }

  if (portasAbertas >= 3) {
    console.log(`três portas ou mais abertas, bem vindo(a)`);

    i = 15;
  } else {
    console.log(
      `OPS! você não conseguiu abrir as três portas, tente novamente`
    );
  }
}

gerarPortas();

function arraysIguais(array1, array2) {
  return (
    array1.length === array2.length &&
    array1.every((valor, index) => valor === array2[index])
  );
}
