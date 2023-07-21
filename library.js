function openForm() {
    document.getElementById("popup-form").style.display = "block";
}

function closeForm() {
    document.getElementById("popup-form").style.display = "none";
}
let table = document.getElementById("myTable");
removeButton = document.createElement('button');
removeButton.innerText = "X";
removeButton.setAttribute("id", "remove-button");
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
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerHTML = i + 1;
        cell2.innerHTML = myLibrary[i].title;
        cell3.innerHTML = myLibrary[i].author;
        cell4.innerHTML = myLibrary[i].pages;
        cell5.innerHTML = myLibrary[i].read;
        cell6.appendChild(removeButton.cloneNode(true));
        cell6.addEventListener("click", removeButtonClick);
        //sets id so remove button knows what to remove
        cell6.setAttribute("id", i + 1);
    }

    // so the new table doesn't repeat all the entries in the previous table
    if (table.rows.length - 1 > myLibrary.length) {
        for (i = table.rows.length - 1; i > myLibrary.length; i--) {
            table.deleteRow(i);
        }
    }
}

let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", submitButtonClick);
function submitButtonClick(event) {
    //so the form doesn't get submitted
    event.preventDefault();
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector('input[name="ans"]:checked');
    let userBook = new Book(title.value, author.value, pages.value, read.value);
    addBookToLibrary(userBook);
    displayBooks();
}


function removeButtonClick() {
    //deletes selected row
    table.deleteRow(this.id);
    //removes the deleted book from the array
    myLibrary.splice(this.id - 1, 1);
    //redisplays the library sans deleted book
    displayBooks();
}