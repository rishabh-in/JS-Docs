import { Book } from './challenge.js';

const newBook = new Book("Physics-1", 400);

const obj = {
    firstName: 'Rishabh',
    lastName: 'Tiwari',
    role: 'SDE',
    age: 22
}

const content = `
    <ul>
        <li>${obj.firstName}</li>
        <li>${obj.lastName}</li>
        <li>${obj.role}</li>
        <li>${obj.age}</li>
        <li>${newBook.bookName}</li>
        <li>${newBook.noOfPages}</li>
    </ul>
`

document.body.innerHTML = content;