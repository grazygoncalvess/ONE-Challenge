let amigos = [];

function adicionarAmigo() {
  const nomeInput = document.getElementById("amigo");
  const nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  limparCampo();
  exibirLista();
}

function limparCampo() {
  const nomeInput = document.getElementById("amigo");
  nomeInput.value = "";
}

function limparLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
}

function exibirLista() {
  const lista = document.getElementById("listaAmigos");
  limparLista();

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há nenhum amigo para ser sorteado.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  limparCampo();
  limparLista();

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Seu amigo secreto é: ${amigoSorteado}</li>`;
}