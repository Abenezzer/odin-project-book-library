const myLibrary = [];

// create a book constructor

function Book(name, author, publishedDate, price) {
  if (!new.target)
    throw Error("You have use new keyword to call Book constructor!");
  this.name = name;
  this.author = author;
  this.publishedDate = publishedDate;
  this.price = price;
}

