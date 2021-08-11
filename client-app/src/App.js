import React , {  useEffect  } from 'react';
import Album from './Components/Album';
import ViewBook  from './Components/ViewBook';
import { Footer } from './Components/Footer';
import { observer } from 'mobx-react-lite';
import BooksStore from './Stores/booksStore';
import CommentStore from './Stores/commentStore';







const App =  () => {





      useEffect( ( )=> {
        BooksStore.loadBook()
        CommentStore.loadComments()
      },[]) 

    
  return (
    <div>

        <Album />

        <ViewBook />

        <Footer />
        

        
      
      
    </div>
  );
}

export default observer(App);
