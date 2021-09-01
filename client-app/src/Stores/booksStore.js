import { makeAutoObservable } from "mobx";
import Agent from "../Api/Agent";


class BookStoreImp{
    
    //OBSERVABLE
    books = [];
    book = [];
    selectedBook=[];
    viewMode = false;
    bookModal = false;

    constructor(){
        makeAutoObservable(this);
    }


    //ACTION
    loadBooks = () => {
       Agent.Books.list()
        .then( res => {
            this.books = res;
        })
        .catch(err => console.log(err));
    };

    loadBook = (id) => {
        Agent.Books.details(id)
         .then( res => {
             this.book = res;
         })
         .catch(err => console.log(err));
     };

    selectBook = (id) => {
        this.selectedBook = this.books.find(a => a.id === id);
    }

    closeBook = () => {
        this.viewMode = false;
    }

    openModal = () => {
        this.bookModal = true;
    }

    closeModal = () => {
        this.bookModal = false;
    }


    //COMPUTED
    setBook(book){
        this.book = book;
    }


    
}

const BooksStore = new BookStoreImp();


export default BooksStore;