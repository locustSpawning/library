
var finalizedBook = [];
var booksGrid;
var popup;
var bookForm;
var checkbox;

window.addEventListener("load", (event) => {
    checkbox = document.getElementById('check-box');
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
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
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
    if(checkbox.checked){
        div.appendChild(btn1);
        btn1.textContent = "Read";
        btn1.setAttribute('class', 'read');
        btn1.setAttribute('id', 'btn1');
        btn1.addEventListener('click', readbook);
        }
        else {
        div.appendChild(btn1);
        btn1.textContent = "Not read";
        btn1.setAttribute('class', 'not-read');
        btn1.setAttribute('id', 'btn1');
        btn1.addEventListener('click', readbook);
        }
    div.setAttribute('class', 'book-card');
    div.appendChild(btn2);
    btn2.textContent = "Remove";
    btn2.setAttribute('class', 'remove');
    btn2.addEventListener('click', removeBook);
    booksGrid.append(div);   
}
function removeBook(e){
    let bookCard = e.target.closest('.book-card');
    if (bookCard){
        bookCard.remove();
    }
}

function readbook(e){
    let btn1 =  e.target.closest('button');
    if(btn1.textContent === 'Read'){
        btn1.textContent = "Not read";
        btn1.setAttribute('class', 'not-read');
        btn1.addEventListener('click', readbook);
    }
    else {
        btn1.textContent = "Read";
        btn1.setAttribute('class', 'read');
        btn1.addEventListener('click', readbook);
    }
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


