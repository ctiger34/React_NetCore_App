import { observer } from 'mobx-react-lite'
import moment from 'moment'
import { Icon, Card, Button} from 'semantic-ui-react'
import BooksStore from '../Stores/booksStore'
import CommentStore from '../Stores/commentStore'


const BookDetails = () => {



  const book = BooksStore.selectedBook
  const close = () => {
    BooksStore.closeBook();
    CommentStore.closeCommentBox();
  } 
  

  return (
        <div>
            <Card>
           <Button onClick={close}>
            <Icon name="close" /> </Button> 
           <br />
                <Icon name="book" size="massive" />
                
    <Card.Content>
      <Card.Header> {book.title} </Card.Header>
      <Card.Meta>
        <span className='date'>{ moment(book.publicationDate).format("yyyy")} </span>
      </Card.Meta>
      <Card.Description>
          <b>Author</b>: <>{book.author} </> <br />
          <b>Description:</b> {book.description} <br />
          <b>Language:</b> {book.language} <br />
          <b>Category:</b> {book.category} 

      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths={2}>
          <Button color="blue" content="Read" />
          <Button color="green" content="Leave a Comment" 
          onClick={() => {
            CommentStore.selectBookId(book.id);
            CommentStore.openCommentBox();
            }} />
      </Button.Group>
    </Card.Content>
  </Card>
        </div>
    )
}

export default observer(BookDetails);

