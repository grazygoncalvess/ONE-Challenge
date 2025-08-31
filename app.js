let amigos = []

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value
    if(nome != "" ) {
        amigos.push(nome)
        limparInput()
        listarAmigos()
    } else {
        alert("Por favor, insira um nome.")
    }
}

// Limpar campo do texto
function limparInput(){
    document.getElementById('amigo').value = ""
}

// Listar amigos
function listarAmigos(){
    let lista = document.getElementById('listaAmigos')
    
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; i++){
        let novaLinha = document.createElement("li")
        novaLinha.textContent = amigos[i]
        lista.appendChild(novaLinha)
    }

}

// Sortear amigo

function sortearAmigo(){
    if (amigos.length == 0){
        alert("Não há nenhum amigo para ser sorteado.")
        return
    }

    let indice = Math.floor(Math.random() * amigos.length)
    let sorteado = amigos[indice]

    document.getElementById('resultado').innerHTML = sorteado
}