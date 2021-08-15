import { makeAutoObservable, runInAction } from "mobx";
import Agent from "../Api/Agent";

class commentStoreImp{
    comment = [];
    selectedComment =[];
    deletedComment;
    selectedCommentId;
    selectedBookId;
    viewMode = false;

    constructor(){
        makeAutoObservable(this);
    }

    loadComments = async () => {
        await Agent.Comments.list().then( res => {
            this.comment = res;
        })
        .catch(err => console.log(err));
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

    addComment = async(com) => {
      try {
        await Agent.Comments.create(com);
       runInAction(()=>{
        this.comment.push(com);
        this.selectBookId(this.selectedBookId);
       })
        
      }
      catch(err){
          console.log(err);
      }
        
    } 

    deleteComment = async(id)=> {
        try {
        await Agent.Comments.delete(id);
        runInAction=(()=>{
        this.selectedComment = this.selectedComment.filter(a=> a.id !== id)
        })
        }
        catch(err){
            console.log(err)
        }
    }
        
    
}

const CommentStore = new commentStoreImp()

export default CommentStore;