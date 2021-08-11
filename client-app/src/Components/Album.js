import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Segment,Icon, Menu,Button,Container, Label} from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import BooksStore from '../Stores/booksStore';
import CommentStore from '../Stores/commentStore';





//Component STYLE



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






/// Component FUNCTION

const Album = () => {
  const classes = useStyles();
  const book = BooksStore.book;
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            
        
            <Menu.Item floated="right" header> <Icon name="home" size="huge" /> </Menu.Item>

            
            <Menu.Item style={{margin: '5px'}}> <h1>Home</h1> </Menu.Item>
            <Menu.Item style={{margin: '5px'}}> <h1>Books</h1> </Menu.Item>
            <Menu.Item style={{margin: '5px'}}> <h1>Category</h1> </Menu.Item>
            
            
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxwidth="sm">
            <Typography component="h1" variant="h2" align="center" primary gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" primary>
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" primary>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxwidth="md">
          {/* End hero unit */}


          {/* START OF THE BODY OF THE PAGE */}


          <Grid container spacing={4}>
            {book.map((b) => (
              <Grid item key={b.id} xs={12} sm={6} md={4}>
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
                    CommentStore.selectBookId(b.id)
                    CommentStore.closeCommentBox()
                  }}
                    size="small" primary>
                      <b>  View </b>
                    </Button>
                    <Button floated="right" size="small" primary>
                      <b> Comment </b>
                    </Button>
                  </CardActions>
                  </Segment>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
              




       
    </React.Fragment>
  );
}

export default observer(Album);