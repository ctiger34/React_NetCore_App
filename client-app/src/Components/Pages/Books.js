import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Segment,Button, Label,Header, Image,Modal} from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import BooksStore from '../../Stores/booksStore';
import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import reviewStore from '../../Stores/reviewStore';
import CommentStore from '../../Stores/commentStore';







const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
  




const Books = () => {


    const book = BooksStore.books;
    const sBook = [BooksStore.selectedBook];
    const classes = useStyles();
    const [open, setOpen] = useState(false)


    return (


      
      
        <Container>

             <Grid container spacing={4}>
             {book.map((b) => (
            
              <Grid item key={b.title} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={b.Title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {b.title} <br />
                      <Label basic content={b.language} />
                      
                    </Typography>
                    <Typography>
                     {b.description} 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Label basic content={`Category: ${b.category}`} />
                  </CardActions>

                  <Segment >

                  <CardActions >
                  <Button floated="right" 
                  onClick={() => {
                    BooksStore.selectBook(b.id)
                    // CommentStore.selectBookId(b.id)
                    // CommentStore.closeCommentBox()
                    setOpen(true)
                  }}
                    size="small" primary>
                      <b>  Preview </b>
                    </Button>
                    <Button floated="right" size="small" 
                    onClick={() => {
                      BooksStore.loadBook(b.id)
                      reviewStore.selectBook(b.id)
                      CommentStore.selectBookId(b.id)
                    }} 
                    as={Link} to={`/books/${b.id}`} primary>
                      <b> Download </b>
                    </Button>
                  </CardActions>
                  </Segment>
                </Card>
              </Grid>
              ))}  
          </Grid>


        

      {
      sBook.map((b)=> (
        
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          key={b.id}
        >
          <Modal.Header> {b.title}  </Modal.Header>
          <Modal.Content image>
        <Image size='medium' src={`Images/BookImages/${b.title}.jpg`} wrapped />
        <Modal.Description>
          <Header>Written by: {b.author}</Header>
          <p>
            <b>Description: </b>
            
            {b.description}
          </p>
          <p>
            <b>language: </b>
            {b.language}
          </p>
          <p>
            <b>Published on: </b>
            {moment(b.publicationDate).format("yyyy")}
          </p>
          <p>
            <b>Number of pages: </b>
            {b.pages}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() =>setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Open"
          labelPosition='right'
          icon='checkmark'
          as={Link} to={`/books/${b.id}`}
          positive
        />
      </Modal.Actions>
      
    </Modal>
          
      ))}
        </Container>
    )
}

export default observer(Books);
