import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { observer } from 'mobx-react-lite';

const Reviews = ({review}) => {

  return (
    <Grid item xs={12} md={6} key={review.id}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {review.userName}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {review.description}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Review: {review.stars}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default observer(Reviews);
