const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите сумму счёта: ', (bill) => {
  rl.question('Введите процент чаевых: ', (percentage) => {
    rl.question('Введите количество людей: ', (numOfPeople) => {
      const isValidInput = validateInput(bill, percentage, numOfPeople);

      if (isValidInput) {
        const tip = (bill * percentage) / 100;
        const total = parseFloat(bill) + tip;
        const perPerson = total / numOfPeople;

        console.log(`\nСумма чаевых: ${tip.toFixed(2)}`);
        console.log(`Общая сумма: ${total.toFixed(2)}`);
        console.log(`Сумма на каждого человека: ${perPerson.toFixed(2)}`);
      } else {
        console.log('Некорректный ввод. Пожалуйста, убедитесь, что введены числа.');
      }
      
      rl.close();
    });
  });
});

function validateInput(bill, percentage, numOfPeople) {
  // Проверка, что все введены числа и больше 0
  return !isNaN(bill) && parseFloat(bill) > 0 &&
         !isNaN(percentage) && parseFloat(percentage) > 0 &&
         !isNaN(numOfPeople) && parseFloat(numOfPeople) > 0;
}