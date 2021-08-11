import { makeAutoObservable } from "mobx";
import Agent from "../Api/Agent";

class commentStoreImp{
    comment = [];
    selectedComment =[];
    selectedBookId;
    viewMode = false;

    constructor(){
        makeAutoObservable(this);
    }

    loadComments = () => {
        Agent.Comments.list().then( res => {
            this.comment = res;
        })
    }

    selectBookId = (bookid) => {
      this.selectedComment = this.comment.filter(a => a.bookId === bookid);
      this.selectedBookId = bookid;
    }

    openCommentBox = () => {
        this.viewMode = true;
    }

    closeCommentBox = () => {
        this.viewMode = false;
    }
}

const CommentStore = new commentStoreImp()

export default CommentStore;