import * as React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Articulo, getById, ids } from '../../lib/articulos';
import Carrousel from '../../components/Carrousel';
import { reject, concat, isNil } from 'ramda';
import Precio from '../../components/Precio';
import { Button, Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Entrega from '../../components/articulos/Entrega';

interface DetalleArticuloProps {
  articulo: Articulo;
}

const nonNil = reject(isNil);

function makeWhatsAppLink(mensaje: string) {
  return `https://wa.me/541168340304?text=${encodeURIComponent(mensaje)}`;
}

const DetalleArticulo: NextPage<DetalleArticuloProps> = ({
  articulo,
}: DetalleArticuloProps) => {
  const linkWhatsApp = React.useMemo(
    () =>
      makeWhatsAppLink(
        `¡Hola! 👋\nEstoy viendo el sitio de la mudanza y me gustaría comprar *${articulo.titulo}*.`
      ),
    [articulo]
  );

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" gutterBottom>
          {articulo.titulo}
        </Typography>
        <Typography variant="h4" gutterBottom>
          <Precio importe={articulo.precio} />
        </Typography>
        <Grid mb={2}>
          <Entrega articulo={articulo} size="medium" />
        </Grid>
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
        <Button
          color="primary"
          variant="contained"
          startIcon={<WhatsAppIcon />}
          href={linkWhatsApp}
          fullWidth
        >
          ¡Lo quiero!
        </Button>
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
