import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {Segment,Icon, Menu,Button,Container, Label} from 'semantic-ui-react'
import moment from "moment";
import { BookDetails } from './BookDetails';





//Component STYLE

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];





/// Component FUNCTION

export default function Album({book, selectBook}) {
  const classes = useStyles();

  

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
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
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
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}


          {/* START OF THE BODY OF THE PAGE */}


          <Grid container spacing={4}>
            {book.map((b) => (
              <Grid item key={b.Id} xs={12} sm={6} md={4}>
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
                  <Button  onClick={() => {
                    selectBook(b.id)
                  }}
                    size="small" color="primary">
                      <b>  View </b>
                    </Button>
                    <Button  size="small" color="primary">
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
              




                          {/* Footer */}


      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}