import { observer } from 'mobx-react-lite'
import { Segment } from 'semantic-ui-react'
import BooksStore from '../Stores/booksStore'
import CommentStore from '../Stores/commentStore'
import BookDetails  from './BookDetails'
import Comments  from './Comments'



const ViewBook = () => {

    
    

    // const [commentMode, setCommentMode] = useState(false)
    // const [bookID, setBookId] = useState()
    // const [selectedComment, setSelectedComment] = useState()

    // const handleBookId = (id) => {
    //     setBookId(id);
    // }

    // const handleSelectedBookComments = (id) => 
    // {
    //     setSelectedComment(comment.filter(a => a.bookId === id))    
    // }


    
    
  
  
    

    return (
        <div>
            <Segment>
                {   
                BooksStore.viewMode && 
                    <BookDetails/> 
                }
                
            </Segment>
            <Segment>
                {CommentStore.viewMode &&
                <Comments />}
                
            </Segment>
        </div>
    )
}

export default observer(ViewBook);
