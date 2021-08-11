import { makeAutoObservable } from "mobx";
import Agent from "../Api/Agent";


class BookStoreImp{
    
    //OBSERVABLE
    book = [];
    selectedBook=[];
    viewMode = false;

    constructor(){
        makeAutoObservable(this);
    }


    //ACTION
    loadBook = async () => {
        Agent.Books.list()
        .then( res => {
            this.book = res;
        })
    };

    selectBook = (id) => {
        this.selectedBook = this.book.find(a => a.id === id);
        this.viewMode = true;
    }

    closeBook = () => {
        this.viewMode = false;
    }


    //COMPUTED
    setBook(book){
        this.book = book;
    }


    
}

const BooksStore = new BookStoreImp();


export default BooksStore;