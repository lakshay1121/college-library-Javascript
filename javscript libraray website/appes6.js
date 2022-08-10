console.log("this is es6 version of project:");

class Book {

    constructor(name, author, type) {

        this.name = name;
        this.author = author;
        this.type = type;
    }

}

class Display {

    add(book) {




        
      

        console.log("adding to UI")

        let tableBody = document.getElementById('tableBody');

    
        
            let uiString = `
        <tr>
                            
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
         </tr> `

            tableBody.innerHTML += uiString;




        

    }

    //clear

    clear() {

        let libraryform = document.getElementById('libraryform');

        libraryform.reset();
    }

    //validate

    validate(book) {

        if (book.name.length < 2 || book.author.length < 2) {

            return false;
        }

        else {

            return true;
        }
    }


    //delete book function.

   
    //show function

    show(type, message) {

        let alertmess = document.getElementById('alert');

        alertmess.innerHTML = `
        
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <strong>${type}:</strong>  ${message}
    
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times.</span></button>
    </div>`;

        //this timeout , will automatically dismiss the alert after , 5000 milisecond ,that is 5 second.

        setTimeout(() => {

            alertmess.innerHTML = '';
        }, 5000);
    }


    //event listener and all
}


//add submit event listener to form

let libraryform = document.getElementById('libraryform');

let display = new Display();


libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {

    //form default behaviour is to reload the form whenver the form is submitted.

    //this will prevent the form to reload.
    e.preventDefault();

    

    console.log("You have submitted library form");

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;

    // fiction , programming , novels

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let novels = document.getElementById('novels');

    let type;


    //localstorage

   
   

    if (fiction.checked) {

        type = fiction.value;
        
    }

    else if (programming.checked) {

        type = programming.value;
    }


    else if (novels.checked) {

        type = novels.value;
    }


   



    let book = new Book(name, author, type);

    // console.log(book);

    //for displaying the added book

   

    if (display.validate(book)) {

    

        display.add(book);

        display.clear();
        display.show('success', "Your book has been successfully added !");
    }

    else {

        display.show("danger", "Sorry you can not add this book.");
    }


    e.preventDefault();
}