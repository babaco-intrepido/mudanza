import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { all, Articulo, categorias } from '../lib/articulos';
import ListadoArticulos from '../components/articulos/ListadoArticulos';

export interface VentaProps {
  articulos: Articulo[];
  categoriasDisponibles: string[];
}

const Venta: NextPage<VentaProps> = ({ articulos, categoriasDisponibles }) => {
  return (
    <ListadoArticulos
      articulos={articulos}
      categoriasDisponibles={categoriasDisponibles}
    />
  );
};

export const getStaticProps: GetStaticProps<VentaProps> = async () => {
  return {
    props: {
      articulos: await all(),
      categoriasDisponibles: await categorias(),
    },
  };
};

export default Venta;
