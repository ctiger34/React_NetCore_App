import React , {   useEffect , useState } from 'react';
import Album from './Components/Album';
import axios from "axios";
import {  Books } from './Components/Books';
import {  Comments  } from './Components/Comments';
import { ViewBook } from './Components/ViewBook';







function App() {

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState();

  const handleSlectBook = (id) => {
    setSelectedBook(books.filter(a => a.id === id)[0])
  }

    useEffect( ( )=> {
        axios.get("https://localhost:5001/api/books/")
            .then( (response) => {
                setBooks(response.data)
                
            })
            .catch((err) =>
            {
                console.log(err)
            })
    },[]) 

  return (
    < div>
        <Album book={books} selectBook={handleSlectBook } />
        
        {/* <Books /> */}
        <ViewBook  selectedBook={selectedBook}  />
        

        
      
      
    </div>
  );
}

export default App;
