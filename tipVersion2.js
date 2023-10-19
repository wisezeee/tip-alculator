const readline = require('readline');   // подключаем модуль readline, который позволяет считывать ввод пользователя из командной строки

const rl = readline.createInterface({   // создаем интерфейс readline, используя функцию createInterface, которая принимает объект с входным и выходным потоками
  input: process.stdin, //входной пото
  output: process.stdout //выходной поток
});

rl.question('Введите сумму счёта: ', (bill) => {                           //вопросы пользователю с помощью функции question
  rl.question('Введите процент чаевых: ', (percentage) => {
    rl.question('Введите количество людей: ', (numOfPeople) => {
      const isValidInput = validateInput(bill, percentage, numOfPeople);

      if (isValidInput) {
        const tip = (bill * percentage) / 100;
        const total = parseFloat(bill) + tip;
        const perPerson = total / numOfPeople;

        console.log(`\nСумма чаевых: ${tip.toFixed(2)}`); //округление до 2 чисел после запятой и вывод 
        console.log(`Общая сумма: ${total.toFixed(2)}`);
        console.log(`Сумма на каждого человека: ${perPerson.toFixed(2)}`);
      } else {
        console.log('Некорректный ввод. Пожалуйста, убедитесь, что введены числа.');
      }
      
      rl.close(); //закрывает интерфейс, завершая выполнение программы.
    });
  });
});

function validateInput(bill, percentage, numOfPeople) {            //для проверки, что введенные значени больше нуля
  return !isNaN(bill) && parseFloat(bill) > 0 &&
         !isNaN(percentage) && parseFloat(percentage) > 0 &&
         !isNaN(numOfPeople) && parseFloat(numOfPeople) > 0;
}