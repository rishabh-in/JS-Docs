const navMenu = ['Home', 'Buy', 'Cart', 'Payment', 'Contact us'];

let content = ""
// forEach method
navMenu.forEach((ele) => {
    let item = `<li><a href="#">${ele}</a></li>`;
    content = content + item;
});

let finalContent = "<ul>" + content + "</ul>";

console.log(finalContent)

// find method
let terms = []
navMenu.find((item) => {
    if(item.length > 4) terms.unshift(item);
});
console.log(terms);


//////// challenge

let newArr = ['laptop','desktop', 'keyboard', 'pen', 'notebook',
'mouse', 'mobile'];

let lastItem = newArr.pop();
console.log(lastItem);

newArr.unshift(lastItem);

// newArr.unshift(newArr.pop());

newArr.sort();
console.log(newArr);

newArr.find((item) => {
    if(item === 'notebook') console.log('notebook found');
})

let remove = 'notebook';
newArr.splice(newArr.indexOf(remove), 1);
console.log(newArr);