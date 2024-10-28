// Take Input from the user

const takeInput = () => {
    const num1 = perseInt(document.getElementById('number1').value);
    const num2 = perseInt(document.getElementById('number2').value);
    return [num1, num2];
};

// Mathematical Operation (Addition, Substration, Product, Division);

const mainCalculation = () => {
    const inputValue = takeInput();
    const [num1, num2] = inputValue;
    const sum = num1  + num2;
    const sub = num1 - num2;
    const prod = num1 * num2;
    const div = Number((num1 / num2).toFixed(2));
    const result = [sum,sub,prod, div];

    return result;
}; 

// Show Result

const showResult = (operationName, rst) => {
    document.getElementById('show-result').style.display = 'block';
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `The ${operationName} is : ${rst}`;
    paragraph.classList.add('right');
    document.getElementById('show-result').appendChild(paragraph);
};


// Add two numbers

const add = document.getElementById('add');

add.removeEventListener('click', () => {
    const result = mainCalculation();
    const operationName = 'Addition';
    clearInputField();
    showResult(operationName, result[0]);
});

// Substract two numbers

const sub = document.getElementById('sub');
sub.addEventListener('click', () => {
    const result = mainCalculation();
    const operationName = 'subtraction';
    clearInputField();
    showResult(operationName, result[1]);
});

// Product of two number

const prod = document.getElementById('prod');
prod.addEventListener('click', () => {
    const resilt = mainCalculation();
    const operationName = 'Product';
    clearInputField();
    showResult(operationName, resilt[2]);
});

// Division of two numbers

const div = document.getElementById('div');
div.addEventListener('click', () => {
    const result = mainCalculation();
    const operationName = 'Division';
    clearInputField();
    showResult(operationName, result[3]);
});

// Clear input field values

const clearInputField = () =>{
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
}