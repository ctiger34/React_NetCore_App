import React , { useState} from 'react'
import { Segment } from 'semantic-ui-react'
import { BookDetails } from './BookDetails'
import { Comments } from './Comments'



export const ViewBook = ({selectedBook, commentBox, cancel, comment, commentBoxMode}) => {

    
    

    const [commentMode, setCommentMode] = useState(false)
    const [bookID, setBookId] = useState()
    const [selectedComment, setSelectedComment] = useState()

    const handleBookId = (id) => {
        setBookId(id);
    }

    const handleSelectedBookComments = (id) => 
    {
        setSelectedComment(comment.filter(a => a.bookId === id))    
    }


    
    
  
  
    

    return (
        <div>
            <Segment>
                {selectedBook && 
                ( <BookDetails  
                cancel={cancel} 
                book={selectedBook} 
                commentBox={setCommentMode}
                SBC={handleSelectedBookComments}
                selectedBookId={handleBookId}
                /> )}
                
            </Segment>
            <Segment>
                {commentMode &&
                <Comments
                comment={selectedComment}
                selectedBookId={bookID}
                commentBoxMode={setCommentMode}
                 />}
                
            </Segment>
        </div>
    )
}
