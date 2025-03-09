let myLibrary = [
  new Book("The power of now", "Ekhart Tolle", Date.now(), 40),
  new Book(
    "The subtle arts of not giving a fu*k",
    "Mark Manson",
    Date.now(),
    45
  ),
];
displayBooks(myLibrary);
// create a book constructor
function Book(title, author, publishedDate, price) {
  if (!new.target)
    throw Error("You have use new keyword to call Book constructor!");
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.publishedDate = publishedDate;
  this.status = "unread";
  this.price = price;
}

// add book to the library array
function addBookToLibrary(name, author, publishedDate, price) {
  const book = new Book(name, author, publishedDate, price);
  myLibrary.push(book);
  displayBooks(myLibrary);
}

// display all the books to the user
function displayBooks(books) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    const tr = document.createElement("tr");
    const tds = `
      <td>${books[i].title}</td>
      <td>${books[i].author}</td>
      <td>${books[i].publishedDate}</td>
      <td>${books[i].price}</td>
      <td>${books[i].status}</td>
      <td class="action-td">
      <button data-id=${books[i].id} class="action-read">mark As Read</button>
      <button data-id=${books[i].id} class="action-delete">Delete</button>
       </td>
    `;
    tr.innerHTML = tds;
    tbody.appendChild(tr);
  }
}

// add new book
const form = document.querySelector("#book-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const title = formData.get("title");
  const author = formData.get("author");
  const publishedDate = formData.get("publishedDate");
  const price = formData.get("price");

  addBookToLibrary(title, author, publishedDate, price);

  bgOverlay.style.display = "none";
  modal.style.display = "none";
});

const tbody = document.querySelector("tbody");

tbody.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-id")) {
    if (e.target.classList.contains("action-read")) {
      markAsRead(e.target.dataset.id);
    } else {
      deleteBook(e.target.dataset.id);
    }
  }
});

function markAsRead(id) {
  myLibrary = myLibrary.map((book) =>
    book.id === id ? { ...book, status: "Read" } : book
  );
  displayBooks(myLibrary);
}

// Filter a book based on their title

const filterButton = document.querySelector("#filter");
const input = document.querySelector(".search input");
console.log(input.value);

filterButton.addEventListener("click", (e) => {
  if (input.value === "") {
    console.log("dfdkf");
    displayBooks(myLibrary);
  } else {
    filterBook(input.value);
    input.value = "";
  }
});

function filterBook(title) {
  const books = myLibrary.filter((book) => book.title === title);
  displayBooks(books);
}

// Delete book
function deleteBook(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  displayBooks(myLibrary);
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
