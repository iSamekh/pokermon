const users = db.collection("users")

const btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
  let inputPassword = document.querySelector('#password')

  if (inputPassword.getAttribute('type') == 'password') {
    inputPassword.setAttribute('type', 'text')
  } else {
    inputPassword.setAttribute('type', 'password')
  }
})

async function checkInfo(getLogin, getPassword) {
  try {
    const loginCheck = await users.where('login', '==', getLogin).get();
    if (loginCheck.empty) {
      loginLabel.setAttribute('style', 'color: red')
      login.setAttribute('style', 'border-color: red')
      passwordLabel.setAttribute('style', 'color: red')
      password.setAttribute('style', 'border-color: red')
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Wrong login or password'
      login.focus()
      return false;
    } else {
      const userDoc = loginCheck.docs[0];
      const userData = userDoc.data();
      if (userData.password === getPassword) {
        window.location.href = './main.html'
      } else {
        loginLabel.setAttribute('style', 'color: red')
        login.setAttribute('style', 'border-color: red')
        passwordLabel.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Wrong login or password'
        login.focus()
        return false;
      }
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}

function signin() {
  let login = document.querySelector('#login')
  let password = document.querySelector('#password')
  let loginLabel = document.querySelector('#loginLabel')
  let passwordLabel = document.querySelector('#passwordLabel')
  let msgError = document.querySelector('#msgError')

  if (login.value.length < 4 || password.value.length < 6) {
    loginLabel.setAttribute('style', 'color: red')
    login.setAttribute('style', 'border-color: red')
    passwordLabel.setAttribute('style', 'color: red')
    password.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Preencha o campo usuário e password corretamente'
    login.focus()
  } else {
    checkInfo(login.value, password.value)
  }
}
