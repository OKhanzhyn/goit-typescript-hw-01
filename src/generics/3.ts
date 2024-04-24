// Завдання 3
// Виконуйте це завдання у файлі src/generics/3.ts.
// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }
function merge<X extends object, Y extends object>(objA: X, objB: Y): X & Y {
    return Object.assign({}, objA, objB);
  }