// Dавайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
// Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
// Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
// Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.

// class BankAccount {
//     #balance = 0;

//     // Геттер для получения текущего баланса
//     get balance() {
//         return this.#balance;
//     }
//     // Метод для внесения денег на счет
//     deposit(amount) {
//         if (amount <= 0) {
//             throw new Error("value can't be below zero");
//         }
//         this.#balance += amount;
//     }

//     // withdraw(amount) Метод для снятия денег со счета
//     withdraw(amount){
//         if(amount < 0){
//             throw Error("amount must be positive");
//         }if(amount > this.#balance){
//             throw Error("insufficient summ on the deposit");
//         }
//         {this.#balance -= amount;}
//     }

//     // constructor(initialBalance) Конструктор для инициализации начального баланса
//     constructor(initialBalance){
//         if(initialBalance < 0){
//             throw Error("initial balance must be positive");
//         }
//         this.#balance = initialBalance;
//     }
// }


// // Создаем новый банковский счет с начальным балансом 500
// let account = new BankAccount(500);
// console.log(account.balance); // Выводит: 500


// account.deposit(200);
// console.log(account.balance); // Выводит: 700


// account.withdraw(100);
// console.log(account.balance); // Выводит: 600
//2
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум аккаунте, а некоторые - нет. Ваша задача - создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и `instanceof`.




// // 4. В функции `getAccountInfo` используйте `instanceof` для проверки типа переданного пользователя и дайте соответствующий ответ.

// // 1. Создайте базовый класс `User` с базовой информацией (например, имя и фамилия).
// class User {
// name = 'user';
// surname = 'userFamilyName';
// constructor(name, surname){
//     this.name = name;
//     this.surname = surname;
// }
// }

// // 2. Создайте классы `PremiumUser` и `RegularUser`, которые наследуются от `User`. Класс `PremiumUser` должен иметь свойство `premiumAccount` (допустим, дата истечения срока действия), а у `RegularUser` такого свойства нет.
// class PremiumUser extends User {
// premiumAccount = 0; 
// constructor(){
//     super();
//     this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
// }// Пример: установите срок действия на год вперед
// }


// // создать RegularUser
// class RegularUser extends User{

// }
// // 3. Создайте функцию `getAccountInfo(user)`, которая принимает объект класса `User` и возвращает информацию о наличии и сроке действия премиум аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
// function getAccountInfo(user) {
//     if(user instanceof PremiumUser && user.premiumAccount){
//         return `премиум подписка действительна до : ${new Date(user.premiumAccount).toLocaleDateString()}` ?? user.premiumAccount;
//     }else if(user instanceof RegularUser && !user.premiumAccount){
//         return "У вас нет премиум подписки";
//     }else{
//         return "тип пользователя не определен";
//     }
// // Премиум аккаунт действителен до такой-то даты или информация отсутствует


// // пользователь без премиум аккаунта
// // Тип пользователя не определен"
// }


// // Проверка
// const user1 = new PremiumUser('vasya', 'Ivanov');
// const user2 = new RegularUser('Petya', 'Petrov');
// console.log(getAccountInfo(user1));
// console.log(getAccountInfo(user2));

// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.

// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить".

// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать try и catch для проверки вводимого значения.
// <input type="text" class="number-input" placeholder="Введите число">
// <button class="check-button">Проверить</button>
// <div class="message"></div>

// const numberInput = document.querySelector('.validator-input');
// const checkButton = document.querySelector(' .validator-btn');
// const reply = document.querySelector('.validator-reply');

// checkButton.addEventListener('click', () => {
//     const number = Number(numberInput.value);
//     try {
//         if (isNaN(number) || numberInput === "") {

//             throw new Error("Не число");
//         } else {
//             reply.textContent = "OK";
//         }
//     } catch (error) {
//         reply.textContent = error.message;
//     }

// });

// <form class="validator">
// <label>Введите число 
//     <input type="text" placeholder="Введите число" class="validator-input">
// </label>
// <button type="button" class="validator-btn">Проверить</button>
// <div class="validator-reply"></div>
// </form>


// <script>
// const numberInput = document.querySelector('.validator-input');
// const checkButton = document.querySelector(' .validator-btn');
// const reply = document.querySelector('.validator-reply');


// checkButton.addEventListener('click', () => {
//     const number = Number(numberInput.value);
//     console.log(number);
//     try {
//         if (isNaN(number) || numberInput.value === "") {

//             throw new Error("Не число");
//         } else {
//             reply.textContent = "OK";
//         }
//     } catch (error) {
//         reply.textContent = error.message;
//     }

// });</script>

