var divElement = document.createElement("Div");
divElement.id = 'divID';
let popup = document.getElementById('popup');

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return [title, author, pages, read]
    }
}


function addBookToLibrary(Book){
    var bookInfo = document.createElement('P');
    var text = Book;
    bookInfo.appendChild(text);
    divElement.appendChild(bookInfo);
    document.getElementsByClassName("books-grid").appendChild(divElement);
}


function openPopUp(){
    popup.classList.add('open-popup');
    document.getElementById("overlay").style.display = "block";
}


function closePopUp(e){
    e.preventDefault();
    popup.classList.remove('open-popup');
    document.getElementById("overlay").style.display = "none";
}


  