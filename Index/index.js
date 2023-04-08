if (localStorage.getItem("token") == null) {
    alert("Faça o login");
    window.location.href = "./login.html";
}

const userOnline = JSON.parse(localStorage.getItem("userOnline"));

const user = document.querySelector("#user");
user.innerHTML = `Hello ${userOnline.name}`;

function quit() {
    localStorage.removeItem("token");
    localStorage.removeItem("userOnline");
    window.location.href = "./login.html";
}