const myLibrary = [];

// create a book constructor
function Book(name, author, publishedDate, price) {
  if (!new.target)
    throw Error("You have use new keyword to call Book constructor!");
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.publishedDate = publishedDate;
  this.price = price;
}

// add book to the library array
function addBookToLibrary(name, author, publishedDate, price) {
  const book = new Book(name, author, publishedDate, price);
  myLibrary.push(book);
}

// display all the books to the user
function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

// Add new book modal form

const addBookbtn = document.querySelector("#add-book");
const bgOverlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

addBookbtn.addEventListener("click", (e) => {
  bgOverlay.style.display = "flex";
  modal.style.display = "block";
});

// remove the modal when a user click outside the modal

bgOverlay.addEventListener("click", (e) => {
  bgOverlay.style.display = "none";
  modal.style.display = "none";
});
