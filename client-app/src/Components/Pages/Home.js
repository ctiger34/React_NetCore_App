import { observer } from 'mobx-react-lite'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Container} from 'semantic-ui-react'





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



const Home = () => {


    const classes = useStyles();

    return (
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxwidth="sm">
            <Typography component="h1" variant="h2" align="center" primary="true" gutterBottom>
              Haji E-book
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" primary>
                    <h1>
                    Sign In
                    </h1>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" positive>
                    <h1>
                    Sign Up
                    </h1>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxwidth="md">
          {/* End hero unit */}
        </Container>
      </main>
    )
}

export default observer(Home);
