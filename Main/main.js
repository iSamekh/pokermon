const userData = JSON.parse(sessionStorage.getItem('userData'))
const userLogado = userData.nickname

const user = document.querySelector("#user");


user.innerHTML += `${userData.nickname} Pokedex`;

function quit() {
    window.location.href = "./index.html";
}