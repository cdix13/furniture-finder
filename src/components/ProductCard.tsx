import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { formatRupiah } from '../utils';

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: `2px solid ${theme.palette.grey[400]}`,
      borderRadius: theme.shape.borderRadius,
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
      margin: theme.spacing(2, 0),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }),
);

interface Props {
  product: any;
}

const ProductCard = (props: Props) => {
  const classes = useStyles();
  const { product } = props;

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid container justify="space-between" className={classes.title}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              {formatRupiah(product.price)}
            </Typography>
          </Grid>
          <Typography gutterBottom>
            {product.description
              .split('')
              .splice(0, 115)
              .join('')}
          </Typography>
          <Typography>{product.furniture_style.join(', ')}</Typography>
          <Typography align="right">
            Delivery {product.delivery_time} Days
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
