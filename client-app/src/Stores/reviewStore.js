import { makeAutoObservable } from "mobx";
import Agent from "../Api/Agent";

class reviewStoreImp{
    reviews = [];
    review = [];
    selectedBookReviews =[];
    selectedBookId;

    constructor(){
        makeAutoObservable(this);
    }

    loadReviews = async () => {
        await Agent.Reviews.list().then( res => {
            this.reviews = res;
        })
        .catch(err => console.log(err));
    }

    loadReview = (id) => {
        Agent.Reviews.details(id)
         .then( res => {
             this.review = res;
         })
         .catch(err => console.log(err));
     };

    selectBook = (bookid) => {
      this.selectedBookReviews = this.reviews.filter(a => a.bookId === bookid);
      this.selectedBookId = bookid;
    }

    addReview = async(rev) => {
      try {
        await Agent.Reviews.create(rev);
        this.reviews.push(rev);
        this.selectBookId(this.selectedBookId);
      }
      catch(err){
          console.log(err);
      }
        
    } 

    deleteReview = async(id)=> {
        try {
        await Agent.Reviews.delete(id);
        this.selectedBookReviews = this.selectedBookReviews.filter(a=> a.id !== id)
        }
        catch(err){
            console.log(err)
        }
    }
        
    
}

const reviewStore = new reviewStoreImp()

export default reviewStore;