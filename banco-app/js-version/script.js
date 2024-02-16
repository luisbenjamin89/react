'use strict'

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Juan Sánchez',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'María Portazgo',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Estefanía Pueyo',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Javier Rodríguez',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

//crea una funcion createUsername que reciba un array  y devueval
//un nuevo array con los nombres de usurio de cada cuenta en minuscula y sin espacios
//ejemplo juan sanchez ->js


const createUsername = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('')
  })
}

createUsername(accounts)

btnLogin.addEventListener('click', function (e) {
  //1.no llamar al aservidor 
  e.preventDefault()
  //2.buscar cuenta del usuario  y ver si existe 
const username = inputLoginUsername.value
  const pin = inputLoginPin.value
const account = accounts.find((account) => account.username === username)
//3.recibir un objeto cuenta {pin : 111}
//4.recibir undefined si no exite la cuenta
if (account?.pin === Number(pin)) { //si el usuario existe en la base de datos nos da el pin si no lo devuelve error o login incorecto 
  console.log('Login correcto')
  //5.si existe, mostrar la app y el mensaje de bienvenida
  containerApp.style.opacity = 100
  labelWelcome.textContent = `Bienvenido, ${account.owner.split(' ')[0]}`
  updateUI(account)
}else {
  console.log('Login incorrecto')
  //6.si no existe,usuario o contraseña incorrectos
}
//4.limpiar los inputs
inputLoginUsername.value=inputLoginPin.value=''
inputLoginPin.blur() //quita el focus
})

function updateUI(account) {
displayMovements(account.movements)

}

function displayMovements(movements) {
  containerMovements.innerHTML = ''
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}
//tareas
//mostrar texto de bienvenida
//cmabiar opacidad
//quitar los movientes que hay en el html 