import { Book } from "./books";

console.log("Hello world");

const books = [];
books.push(new Book("Harry Potter and the Deathly Hallows", "J. K. Rouling", 2007));
books.push(new Book("Lord of the Rings: The Felowship of the Ring", "J. R. R. Tolkien", 1954));

books.forEach(book =>{
    book.showInfo();
});