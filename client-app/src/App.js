import React , {   useContext, useEffect , useState } from 'react';
import Album from './Components/Album';
import axios from "axios";
import { ViewBook } from './Components/ViewBook';
import Agent from './Api/Agent';
import { Footer } from './Components/Footer';
import BookStore from './Stores/bookStore';
import { Observer } from 'mobx-react-lite';







function App() {

  const bookStore = useContext(BookStore);


  //BOOKS SCHEMA CODE

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState();
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleSlectBook = (id) => {
    setSelectedBook(books.filter(a => a.id === id)[0]);
    setCommentBox()
    console.log(commentBox)
    if(selectedBook !== undefined)
    {
      setSelectedBookId(selectedBook.id)
    }
  }


  const close = () => {
    setSelectedBook();
    setCommentBox()
  }


  // COMMENTS SCHEMA CODE

  const [comments, setComments] = useState([])
  const [commentBox, setCommentBox] = useState()

  

  const handleCommentBoxMode = () => {
    setCommentBox()
  }

    //AXIOS REQUESTS
      const requestOne = Agent.Books.list();
      const requestTwo = Agent.Comments.list();

      useEffect( ( )=> {
        // axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        //   setBooks(responses[0])
        //   setComments(responses[1])
        // })).catch(errors => {
        //   console.log(errors);
        // })

        bookStore.loadBooks();
    },[bookStore]) 

    
  return (
    < div>

        <Album 
        book={bookStore.books} 
        selectBook={handleSlectBook }
        commentBoxMode={handleCommentBoxMode}
         />

        <ViewBook 
          selectedBook={selectedBook}
          cancel={close}
          bookid={selectedBookId}
          comment={comments}
          commentBoxMode={commentBox}
            />

        <Footer />
        

        
      
      
    </div>
  );
}

export default Observer(App);
