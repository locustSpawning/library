
var finalizedBook = [];
var booksGrid;
var popup;
var bookForm;

window.addEventListener("load", (event) => {
    booksGrid= document.getElementById('books-grid');
    popup = document.getElementById('popup');
    bookForm = document.getElementById('add-book-form')
    bookForm.addEventListener('submit', function(e){
        e.preventDefault();
    })
});

function Book(){
    const book ={
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        info: function(){
            return [title.value, author.value, pages.value]
        }
    }
    //add if statment for check box
    finalizedBook = book.info();
    console.log(finalizedBook)
    addBookToLibrary(finalizedBook);  
}


function addBookToLibrary(finalizedBook) {
    let div = document.createElement('div');
    for (let i=0; i < finalizedBook.length; i++){
        let p = document.createElement('p')
        if (i==0){
            p.textContent = ('"' + finalizedBook[i] + '"');
            div.appendChild(p);
        }
        else if (i==2){
            p.textContent = (finalizedBook[i] + ' pages');
            div.appendChild(p);
        }
        else {
            p.textContent = finalizedBook[i];
            div.appendChild(p);
        }
    }
    div.setAttribute('class', 'book-card');
    booksGrid.append(div);   
}


function openPopUp(){
    popup.classList.add('open-popup');
    document.getElementById('overlay').style.display = 'block';
}

function closePopUp(e){
    if (bookForm.checkValidity()) {
        Book();
        popup.classList.remove('open-popup');
        document.getElementById('overlay').style.display = 'none';
    }
    document.forms[0].reset();
    e.preventDefault(); //prevents form submiting without info
}




