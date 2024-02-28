"use strict";
// Урок 2. Продвинутая работа с функциями и классами
// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
class Library {
    #booksList = [];

    // Реализуйте геттер allBooks, который возвращает текущий список книг.
    get allBooks() {
        return this.#booksList;
    }
    // Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
    addBook(title) {
        if (this.#booksList.includes(title)) {
            throw Error("The book is alread in the library");
        }
        this.#booksList.push(title);
    }
    // Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
    removeBook(title) {
        if (!this.#booksList.includes(title)) {
            throw Error("the book is not in the library");
        }
        this.#booksList.pop(title);
    }
    // Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
    hasBook(title) {
        return this.#booksList.includes(title);
    }
    // Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
    constructor(initialBooksList) {
        console.log(initialBooksList.filter((value, index) => initialBooksList.indexOf(value) === index));
        if (initialBooksList.filter((value, index) => initialBooksList.indexOf(value) === index).length === initialBooksList.length) {
            this.#booksList = initialBooksList;
        } else {
            throw Error("library initial list has duplicates");
        }
    }
}

//test
let schoolLibrary = new Library(["book4", "book5"]);
console.log(schoolLibrary.allBooks);
schoolLibrary.addBook("book1");
schoolLibrary.addBook("book2");
// schoolLibrary.addBook("book1");
schoolLibrary.removeBook("book1");
console.log(schoolLibrary.allBooks);
console.log(schoolLibrary.hasBook("book2"));
console.log(schoolLibrary.hasBook("book1"));
