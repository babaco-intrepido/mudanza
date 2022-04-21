import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { GetStaticProps, NextPage } from 'next';
import { all, Articulo } from '../lib/articulos';
import FichaArticulo from '../components/articulos/FichaArticulo';

export interface VentaProps {
  articulos: Articulo[];
}

const Venta: NextPage<VentaProps> = ({ articulos }) => {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{ mb: 3 }}
      >
        Artículos a la venta
      </Typography>
      <Grid container spacing={4}>
        {articulos.map((articulo, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FichaArticulo articulo={articulo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps<VentaProps> = async () => {
  const articulos = await all();
  return {
    props: {
      articulos,
    },
  };
};

export default Venta;
