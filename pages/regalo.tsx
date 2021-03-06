import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { todos, Articulo, categorias } from '../lib/articulos';
import ListadoArticulos from '../components/articulos/ListadoArticulos';
import Head from 'next/head';

export interface RegaloProps {
  articulos: Articulo[];
  categoriasDisponibles: string[];
}

const Venta: NextPage<RegaloProps> = ({ articulos, categoriasDisponibles }) => {
  return (
    <>
      <Head>
        <title>De regalo | ¡Nos mudamos!</title>
      </Head>
      <ListadoArticulos
        articulos={articulos}
        categoriasDisponibles={categoriasDisponibles}
        subtitulo="para regalar"
        mostrarPrecio={false}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<RegaloProps> = async () => {
  const destino = 'Regalar';
  return {
    props: {
      articulos: await todos(destino),
      categoriasDisponibles: await categorias(destino),
    },
  };
};

export default Venta;
