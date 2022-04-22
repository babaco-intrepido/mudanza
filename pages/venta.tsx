import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { todos, Articulo, categorias } from '../lib/articulos';
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
      subtitulo="a la venta"
    />
  );
};

export const getStaticProps: GetStaticProps<VentaProps> = async () => {
  const destino = 'Vender';
  return {
    props: {
      articulos: await todos(destino),
      categoriasDisponibles: await categorias(destino),
    },
  };
};

export default Venta;
