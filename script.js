var divElement = document.createElement("div");
let popup = document.getElementById('popup');
var finalizedBook = [];


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
        // document.forms[0].reset();
        addBookToLibrary(finalizedBook);  
    }


function addBookToLibrary(finalizedBook){ 
    
    document.getElementsByClassName("books-grid").appendChild(divElement);
    var bookInfo = document.createElement('p');
    for (i=0; i <= finalizedBook.length; i ++){
        bookInfo.appendChild(finalizedBook[i]);
    }
    console.log(bookInfo);
    var newBook = divElement.appendChild(bookInfo);
    document.getElementsByClassName("books-grid").appendChild(newBook);
}


function openPopUp(){
    popup.classList.add('open-popup');
    document.getElementById("overlay").style.display = "block";
}


function closePopUp(e){ 
    Book();
    e.preventDefault(); //prevents form submiting without info
    popup.classList.remove('open-popup');
    document.getElementById("overlay").style.display = "none";
}




