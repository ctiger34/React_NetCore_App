import React , {  useEffect  } from 'react';
import NavBar from './Components/NavBar';
import { observer } from 'mobx-react-lite';
import BooksStore from './Stores/booksStore';
import CommentStore from './Stores/commentStore';
import { Route } from 'react-router-dom';
import Books from './Components/Pages/Books'
import Home from './Components/Pages/Home';
import OpenBook from './Components/Pages/OpenBook';
import reviewStore from './Stores/reviewStore';







const App =  () => {





      useEffect( ( )=> {
        BooksStore.loadBooks()
        CommentStore.loadComments()
        reviewStore.loadReviews()
      },[]) 

    
  return (
    <div>

      <NavBar/>
      <br/>
      <Route exact path="/" component={Home} />
      <Route  path="/home" component={Home}/>
      <Route exact path="/Books" component={Books} />
      <Route path="/Books/:id" component={OpenBook} />
      {/* <Route path="/category" component={Blog} /> */}
      <br/>
      {/* <Footer /> */}
      
    </div>
  );
}

export default observer(App);
