// callback function

const multiply = (sum) => {
    return sum*sum;
}

const add = (num1, num2, callback) => {
    let addition = num1 + num2;
    let multiplication = callback(addition);
    return multiplication;
}

const result = add(5,6,multiply);
console.log(result);

const element = document.createElement("div");
element.classList.add("main-div");

element.innerHTML = result;

document.body.appendChild(element)