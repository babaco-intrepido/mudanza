import * as React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Articulo, getById, ids } from '../../lib/articulos';
import Carrousel from '../../components/Carrousel';
import { reject, concat, isNil } from 'ramda';

interface DetalleArticuloProps {
  articulo: Articulo;
}

const nonNil = reject(isNil);

const DetalleArticulo: NextPage<DetalleArticuloProps> = ({
  articulo,
}: DetalleArticuloProps) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {articulo.titulo}
        </Typography>
        <Carrousel
          images={concat(
            [articulo.foto1],
            nonNil([articulo.foto2, articulo.foto3])
          )}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: articulo.descripcion,
          }}
        ></div>
      </Box>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const all = await ids();
  return {
    paths: all.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DetalleArticuloProps> = async ({
  params,
}) => {
  const articulo = await getById(params?.id as string);
  return {
    props: {
      articulo,
    },
  };
};

export default DetalleArticulo;
