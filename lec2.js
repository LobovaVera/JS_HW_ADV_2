// console.log(window);
// console.log(window.window);
// console.log(self);
// console.log(frames);
// console.log(globalThis);
// console.log(globalThis === window);
//web worker - windew.self

// window.varaible = 5;
// console.log(window.varaible);

// // 
// function func1(a, b, c){
//     console.log(arguments.length);
// }
//arguments массив входных аргументов
// ● Стрелочные функции не имеют своего this
// ● В стрелочных функциях отсутствует массив arguments
// ● Для однострочных стрелочных функций без выражений в фигурных скобках
// автоматически подставляется return для выражения


// со знаком нижнего подчёркивания для обозначения, что свойство
// защищённое. 
// class AutoMobile {
//     #horsePowers = 0;
//     set horsePowers(value){
//         this.#horsePowers = value;
//     }
//     get horsePowers(){
//         return this.#horsePowers;
//     }
//     constructor(power){
//         this.#horsePowers = power;
//     }
// }
// let auto = new AutoMobile(100);
// auto.#horsePowers = 10; // error
 // ECMAScript 2022 были введены приватные свойства класса. Эти
// свойства начинаются со знака # и имеют защиту на уровне языка.

//instanceof = typeof (но можем узнать еще и класс, не просто объект а массив)

// console.log(arr instanceof Array); //true/ false
// console.log( new Rabbit instance of Rabbit); // ?????


//Опциональная цепочка вызовов методов и оператор нулевого слияния
//проверка на null indefined
// const obj = {
//     key: "value"
// }
// const obj = 0;

// console.log(obj);
// console.log(obj.key);//undefined?????

// console.log(obj?.key);//undefined????

//console.log(newobj.key);//error?????
//console.log(newobj?.key); //error????

// let a = null;
// let b = -2;
// a = -4;
// console.log(a ?? b);//first or the one that is not underfined or null
// (a == null || a = underfined) ? b : a;

//try catch finally

// try {
//     undefined = 1;
// } catch (err){
//     console.log(err);
// } finally {
//     console.log("can't keep silent")
// }
// ● Переменные, объявленные в блоке try, не будут видны в catch и finally.
// Поэтому, если нужен обмен данными между ними, лучше объявить их на
// уровень выше.
// ● Код в блоке finally выполнится в любом случае, даже если в блоке try был
// оператор return.
try{
    throw Error('customised error');
} catch(err){
    console.log(err);
    console.log(err.name);
}

try{
    throw new Error('error');
}catch(err){
    if(!(err instanceof Error)) throw new Error('UFO');
}