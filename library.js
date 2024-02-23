// LIBRARY MANAGEMENT

var library = [
    {
        title: 'The Digital Fortress',
        author: 'Dan Brown',
        availability: true,
        holder: ''
    },
    {
        title: 'The Davinci Code',
        author: 'Dan Brown',
        availability: false,
        holder: 'John Smith'
    },
    {
        title: 'Long Eagle',
        author: 'Anonymous',
        availability: true,
        holder: ''
    },
    {
        title: 'Atomic Habits',
        author: 'James Clair',
        availability: true,
        holder: 'Aline'
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        availability: false,
        holder: ''
    },
];

// const addBooks = (book) => {
//     console.log(library.length);
//     library.push(book);
//     console.log(library.length);
// };

// const listOfAvailableBooks = () => {
//     var available = [];
//     library.forEach(book => {
//         if (book.availability === true) {
//             available.push(book);
//         }
//     });
//     console.log(available);
// }

// const listAllAvailableBooks = () => {
//     var available = library.filter(book => book.availability === true);
//     console.log(available);
// }

// const listAvailableBooks = () => {
//     var available = [];
//     for (var i = 0; i < library.length; i++) {
//         if (library[i].availability === true) {
//             available.push(library[i]);
//         }
//     }
//     console.log(available);
// };

// listAllAvailableBooks();

const borrow = (bookName, holder) => { 
    // Check whether the book is available 
    // var availableBook = library.find(book => book.title === bookName && book.availability === true);
    // console.log(availableBook);
    // if (!availableBook) {
    //     console.log('That book is not available');
    //     return;
    // }

    var theAvailableBook = {};
    library.forEach(book => {
        if (book.title === bookName && book.availability && book.author) {
            theAvailableBook = book;
            book.availability = false;
            book.holder = holder;
            console.log("The book is available for borrowing!");
            return;
        }
    });

    console.log(theAvailableBook);

    if (theAvailableBook.availability || theAvailableBook.availability === false) {
        console.log(library);
    } else {
        console.log('That book is not available');
    }
}


borrow('Atomic Habits', 'John Smith');
let returnedBook = {}
const returnBook = (bookReturned) => {
   let books= library.find(book =>book.title === bookReturned && book.availability );

    if(!books)
    {
        console.log('book not available');
    }
    if(books){

        console.log(`the book named ${bookReturned} was returned `);
    }
    

}
    returnBook('Think and Grow Rich')
    
    // console.log(returnBook());
  