
// Завдання 1
// Виконуйте це завдання у файлі src/generics/1.ts.
// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для типізації повернутих даних.
// import axios from 'axios';
// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

import axios from "axios";
async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// fetchData<Todo>(
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// })

// fetchData<T extends object>(url: string): Promise<T>