// Create a object named Book;

// Using class

export class Book {
    constructor(bookName, noOfPages) {
        this.bookName = bookName;
        this.noOfPages = noOfPages;
    }
    changePageNumber = function(pageNumber) {
        this.noOfPages = pageNumber
    }
}

const newBook = new Book('Physics', 108);

console.log(newBook);
console.log(newBook['bookName']);
console.log(newBook['noOfPages']);

newBook.changePageNumber(200);

console.log(newBook['bookName']);
console.log(newBook['noOfPages']);


// Using object constructor

function NewBook(bookName, noOfPages) {
    this.bookName = bookName;
    this.noOfPages = noOfPages;
    this.changeNoOfPages = function(page) {
        this.noOfPages = page;
    }
}

let bookTwo = new NewBook('Chemistry', 200);
console.log(bookTwo);