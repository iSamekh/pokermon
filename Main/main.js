
const userLogado = "att"
const user = document.querySelector("#user");
user.innerHTML += `${userLogado.nome} Pokedex`;

function quit() {
    window.location.href = "./index.html";
}