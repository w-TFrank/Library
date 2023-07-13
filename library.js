function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
document.getElementById("popupForm").style.display = "none";
}

let table = document.getElementById("myTable");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        let row = table.insertRow(i + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = myLibrary[i].pages;
        cell4.innerHTML = myLibrary[i].read;
    }
}

const mistborn = new Book("mistborn", "sanderson", 3000, "yes");
const lonesome = new Book("lonesome dove", "mcmurtry", 1000, "yes");
const potter = new Book("harry potter", "rowling", 2500, "yes");
addBookToLibrary(mistborn);
addBookToLibrary(lonesome);
addBookToLibrary(potter);
displayBooks();

