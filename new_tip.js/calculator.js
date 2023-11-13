function calculateTip() {
  const bill = parseFloat(document.getElementById('bill').value);
  const percentage = parseFloat(document.getElementById('percentage').value);
  const numOfPeople = parseFloat(document.getElementById('numOfPeople').value);

  const tip = (bill * percentage) / 100;
  const total = bill + tip;
  const perPerson = total / numOfPeople;

  document.getElementById('tipAmount').innerText = `Сумма чаевых: ${tip.toFixed(2)}`;
  document.getElementById('totalAmount').innerText = `Общая сумма: ${total.toFixed(2)}`;
  document.getElementById('amountPerPerson').innerText = `Сумма на каждого человека: ${perPerson.toFixed(2)}`;

  document.getElementById('result').style.display = 'block';
}

function validateInputs() {
  const bill = parseFloat(document.getElementById('bill').value);
  const percentage = parseFloat(document.getElementById('percentage').value);
  const numOfPeople = parseFloat(document.getElementById('numOfPeople').value);

  const isBillValid = !isNaN(bill) && bill > 0;
  const isPercentageValid = !isNaN(percentage) && percentage > 0 && percentage < 100;
  const isNumOfPeopleValid = !isNaN(numOfPeople) && numOfPeople > 0;

  const calculateButton = document.getElementById('calculateButton');
  calculateButton.disabled = !(isBillValid && isPercentageValid && isNumOfPeopleValid);
}