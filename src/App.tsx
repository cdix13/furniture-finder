import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toolbar from './components/Toolbar';
import ProductCard from './components/ProductCard';

const useStyles = makeStyles((theme) =>
  createStyles({
    loader: {
      position: 'absolute',
      top: '40%',
      left: '50%',
    },
    cardGrid: {
      padding: theme.spacing(0, 3),
    },
  }),
);

const App = () => {
  const classes = useStyles();
  const [styles, setStyles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://www.mocky.io/v2/5c9105cb330000112b649af8')
      .then(({ data }) => {
        setStyles(data.furniture_styles);
        setProducts(
          data.products.map((p: any) => {
            return {
              ...p,
              dt:
                Number(p.delivery_time) > 30
                  ? 'moreThanAMonth'
                  : p.delivery_time,
            };
          }),
        );
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  const currentProducts = isFiltered ? filteredProducts : products;

  return (
    <>
      <CssBaseline />
      <Toolbar
        products={products}
        styles={styles}
        setIsFiltered={(isFiltered) => setIsFiltered(isFiltered)}
        setFilteredProducts={(filtered) => setFilteredProducts(filtered)}
      />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {loading ? (
              <CircularProgress size={100} className={classes.loader} />
            ) : error ? (
              <Alert severity="error">{`${error}`}</Alert>
            ) : (
              currentProducts.map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))
            )}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;
