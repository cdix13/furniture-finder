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

const initProducts = [
  {
    name: 'Sofa L Jobi',
    description:
      'Selama Anda dapat berkumpul bersama keluarga dan orang-orang terdekat, duduk di manapun mungkin rasanya tidak menjadi masalah untuk Anda. Akan tetapi, dengan berkumpul bersama menggunakan Jobi L Sofa, suasana quality time Anda akan terasa 180 derajat perubahannya.',
    furniture_style: ['Classic', 'Midcentury'],
    delivery_time: '14',
    price: 5000000,
    dt: '14',
  },
  {
    name: 'Sofa L Vienna',
    description:
      'Apapun kegiatan ataupun peran Anda dalam kehidupan berumah tangga, setiap orang membutuhkan tempat nyaman untuk sejenak mengambil napas. Biarkanlah Wina L Sofa menjadi tempat Anda untuk sepenuhnya melupakan segala kesibukan dan hiruk-pikuk keseharian.',
    furniture_style: ['Midcentury', 'Contemporary'],
    delivery_time: '2',
    price: 7999000,
    dt: '2',
  },
  {
    name: 'Sofa L Arsa Wooden Leg',
    description:
      "Arsa 'L' Sofa dengan kaki kayu adalah gabungan dari sofa 2 seater dan 1 sofa memanjang yang cocok ditaruh ditengah maupun dipojok ruangan anda. Keseluruhan sofa didominasi oleh bantalan dengan busa khusus indoor dengan aksen kaki kayu. Cushion isi dacron yang ditambahkan pada sandaran punggung sofa menambah kenyamanan. Jangan heran bila Anda mudah terlelap di atas sofa ini.",
    furniture_style: ['Scandinavian', 'Modern'],
    delivery_time: '7',
    price: 9499000,
    dt: '7',
  },
  {
    name: 'Sofa L Helena',
    description:
      'Bagaimana pun style dekorasi hunian, pemilihan warna netral seperti hitam dan putih tak pernah salah. Warna ini dapat berbaur dengan cantik dan memberikan keseimbangan tampilan agar rumah tetap terlihat elegan. Bagi Anda yang menyukai sentuhan warna monokrom pada furnitur, Helena L Sofa tak boleh dilewatkan.',
    furniture_style: ['Modern', 'Contemporary'],
    delivery_time: '2',
    price: 7499000,
    dt: '2',
  },
  {
    name: 'Forbyta Sofa Bed',
    description:
      'Menikmati waktu liburan sambil bersantai memang paling pas dilakukan di rumah. Suasana rumah yang nyaman dan tenang akan membuat liburan semakin sempurna. Waktu santai di rumah akan membuat tubuh semakin rileks bila disempurnakan dengan furnitur yang pas. Forbyta Sofa Bed hadir sebagai penyempurna waktu santai Anda di rumah.',
    furniture_style: ['Midcentury'],
    delivery_time: '28',
    price: 8999000,
    dt: '28',
  },
  {
    name: 'Sofa Bed Acronap',
    description:
      'Menikmati waktu liburan sambil bersantai memang paling pas dilakukan di rumah. Suasana rumah yang nyaman dan tenang akan membuat liburan semakin sempurna. Waktu santai di rumah akan membuat tubuh semakin rileks bila disempurnakan dengan furnitur yang pas. Forbyta Sofa Bed hadir sebagai penyempurna waktu santai Anda di rumah.',
    furniture_style: ['Classic'],
    delivery_time: '1',
    price: 4999000,
    dt: '1',
  },
  {
    name: 'Sofa L Wina',
    description:
      'Apapun kegiatan ataupun peran Anda dalam kehidupan berumah tangga, setiap orang membutuhkan tempat nyaman untuk sejenak mengambil napas. Biarkanlah Wina L Sofa menjadi tempat Anda untuk sepenuhnya melupakan segala kesibukan dan hiruk-pikuk keseharian.',
    furniture_style: ['Scandinavian'],
    delivery_time: '12',
    price: 8999000,
    dt: '12',
  },
];

const initStyles = [
  'Classic',
  'Midcentury',
  'Scandinavian',
  'Modern',
  'Contemporary',
];

const App = () => {
  const classes = useStyles();
  const [styles, setStyles] = useState<string[]>(initStyles);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [products, setProducts] = useState(initProducts);
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
        setError(
          'Error load data from API, data used for this app from local variables instead',
        );
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
            ) : (
              <>
                {error && <Alert severity="error">{`${error}`}</Alert>}
                {currentProducts.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </>
            )}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;
