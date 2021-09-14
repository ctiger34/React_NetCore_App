import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { observer } from 'mobx-react-lite';
import BooksStore from '../Stores/booksStore';
import { useEffect } from 'react';
import img from "../Assest/commentAvatar.jpg";



const BookDashboard =({post}) => {

  const book = BooksStore.book

  useEffect(()=>{
    BooksStore.loadBook(post)
  },[post])


  return (

    <React.Fragment>
        <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: {img},
          border: "30px solid",
          
        }}
        key={book.id}
      >
        {/* Increase the priority of the hero background image */}
        <img style={{ display: 'none' }} src={img} alt={book.title} />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(255,255,255,.3)',
          }}

        style={{border:"3px", margin:"40px"}}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {book.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

    </React.Fragment>
    
  );
}

export default observer(BookDashboard);
