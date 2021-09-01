import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Reviews from '../Reviews';
import { observer } from 'mobx-react-lite';
import BookDashboard from '../BookDashboard';
import { useEffect } from 'react';
import BooksStore from '../../Stores/booksStore';
import CommentStore from '../../Stores/commentStore';
import reviewStore from '../../Stores/reviewStore';
import Comments from '../Comments';






const OpenBook= ({match}) => {


  

  


  useEffect(()=>{
    BooksStore.loadBook(match.params.id)
    reviewStore.selectBook(match.params.id)
    CommentStore.selectBookId(match.params.id)
  },[reviewStore.reviews])

  const reviews = reviewStore.selectedBookReviews
    
    const featuredPosts = 
      reviews.map((b) => (
        {
          userName: b.userName,
          description: b.content,
          stars: b.stars
        }
      ));

  


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div style={{border: "10px inset gold"}}>
          <BookDashboard post={match.params.id} />
        </div>

        <br />

        <h1> REVIEWS:</h1>
        <div style={{border:"3px outset ", padding:"10px"}}>
          <Grid container spacing={3}>
            {featuredPosts.map((r) => (
              <Reviews review={r} />
            ))}
          </Grid>
        </div>

        <br />

        <h1> COMMENTS:</h1>
        <div >
         <Comments />
        </div>
        
      </Container>
    
    </React.Fragment>
  );
}

export default observer(OpenBook);
