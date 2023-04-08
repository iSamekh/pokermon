if (localStorage.getItem("token") == null) {
    alert("Faça o login");
    window.location.href = "./login.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));
const user = document.querySelector("#user");
user.innerHTML += `${userLogado.nome}`;

function quit() {
    localStorage.removeItem("token");
    localStorage.removeItem("userOnline");
    window.location.href = "./login.html";
}