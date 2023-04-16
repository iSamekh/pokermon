const users = db.collection("users")
let Id = 0

function submitForm(e) {
  e.preventDefault();

  users.add({
    login: getElementVal('login'),
    nickname: getElementVal('nickname'),
    password: getElementVal('password'),
    registered: firebase.firestore.Timestamp.now(),
    id: Id + 1 
  })
    .catch((error) => {
      console.error("Error adding register: ", error);
    })
}

document.getElementById("registerForm").addEventListener("submit", submitForm);

function cadastrar() {
  if (validNickname && validLogin && validPassword && validConfirmPassword) {
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Registering player...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(() => {
      loginScreen();
    }, 3000)

  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Please fill in all fields correctly before confirming.</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

let btn = document.querySelector('#togglePassword')
let btnConfirm = document.querySelector('#toggleConfirmPassword')

let nickname = document.querySelector('#nickname')
let labelNickname = document.querySelector('#labelNickname')
let validNickname = false

let login = document.querySelector('#login')
let labelLogin = document.querySelector('#labelLogin')
let validLogin = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nickname.addEventListener('keyup', () => {
  if (nickname.value.length <= 2) {
    labelNickname.setAttribute('style', 'color: red')
    labelNickname.innerHTML = 'Nickname *Enter at least 3 characters'
    nickname.setAttribute('style', 'border-color: red')
    validNickname = false
  } else {
    labelNickname.setAttribute('style', 'color: green')
    labelNickname.innerHTML = 'Nickname'
    nickname.setAttribute('style', 'border-color: green')
    validNickname = true
  }
})

login.addEventListener('keyup', () => {
  if (login.value.length <= 4) {
    labelLogin.setAttribute('style', 'color: red')
    labelLogin.innerHTML = 'Login *Enter at least 5 characters'
    login.setAttribute('style', 'border-color: red')
    validLogin = false
  } else {
    labelLogin.setAttribute('style', 'color: green')
    labelLogin.innerHTML = 'Login'
    login.setAttribute('style', 'border-color: green')
    validLogin = true
  }
})

login.addEventListener("blur", async (event) => {
  const checkLogin = event.target.value;
  const querySnapshot = await users.where('login', '==', checkLogin).get();
  Id = await users.get().then((snap) => snap.size)

  if (login.value.length > 4) {
    if (querySnapshot.empty) {
      labelLogin.setAttribute('style', 'color: green')
      labelLogin.innerHTML = 'Login'
      login.setAttribute('style', 'border-color: green')
      validLogin = true
    } else {
      labelLogin.setAttribute('style', 'color: red')
      labelLogin.innerHTML = 'Login *This login already exist'
      login.setAttribute('style', 'border-color: red')
      validLogin = false
    }
  }
})

password.addEventListener('keyup', () => {
  if (password.value.length <= 5) {
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = 'Password *Enter at least 6 characters'
    password.setAttribute('style', 'border-color: red')
    validPassword = false
  } else {
    labelPassword.setAttribute('style', 'color: green')
    labelPassword.innerHTML = 'Password'
    password.setAttribute('style', 'border-color: green')
    validPassword = true
  }
})

confirmPassword.addEventListener('keyup', () => {
  if (password.value != confirmPassword.value) {
    labelConfirmPassword.setAttribute('style', 'color: red')
    labelConfirmPassword.innerHTML = "Confirm Password *Passwords don't match"
    confirmPassword.setAttribute('style', 'border-color: red')
    validConfirmPassword = false
  } else {
    labelConfirmPassword.setAttribute('style', 'color: green')
    labelConfirmPassword.innerHTML = 'Confirm Password'
    confirmPassword.setAttribute('style', 'border-color: green')
    validConfirmPassword = true
  }
})

btn.addEventListener('click', () => {
  let inputPassword = document.querySelector('#password')

  if (inputPassword.getAttribute('type') == 'password') {
    inputPassword.setAttribute('type', 'text')
  } else {
    inputPassword.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', () => {
  let inputConfirmPassword = document.querySelector('#confirmPassword')

  if (inputConfirmPassword.getAttribute('type') == 'password') {
    inputConfirmPassword.setAttribute('type', 'text')
  } else {
    inputConfirmPassword.setAttribute('type', 'password')
  }
})
