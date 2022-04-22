import * as React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Articulo, getById, ids } from '../../lib/articulos';
import Carrousel from '../../components/Carrousel';
import { reject, concat, isNil } from 'ramda';
import Precio from '../../components/Precio';
import { Button, Grid, useMediaQuery, useTheme } from '@mui/material';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const linkWhatsApp = React.useMemo(
    () =>
      makeWhatsAppLink(
        `¡Hola! 👋\nEstoy viendo el sitio de la mudanza y me gustaría comprar *${articulo.titulo}*.`
      ),
    [articulo]
  );

  const Titular = (
    <>
      {' '}
      <Typography variant="h5" gutterBottom>
        {articulo.titulo}
      </Typography>
      <Typography variant="h4" gutterBottom>
        <Precio importe={articulo.precio} />
      </Typography>
      <Grid mb={2}>
        <Entrega articulo={articulo} size="medium" />
      </Grid>
    </>
  );

  const Imagenes = (
    <Carrousel
      images={concat(
        [articulo.foto1],
        nonNil([articulo.foto2, articulo.foto3])
      )}
    />
  );

  const DescripcionBoton = (
    <>
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
    </>
  );

  return (
    <Container maxWidth="lg">
      {isMobile ? (
        <Grid container direction="column">
          {Titular}
          {Imagenes}
          {DescripcionBoton}
        </Grid>
      ) : (
        <Grid container spacing={4}>
          <Grid item md={6}>
            {Imagenes}
          </Grid>
          <Grid item md={6}>
            <Grid container direction="column">
              {Titular}
              {DescripcionBoton}
            </Grid>
          </Grid>
        </Grid>
      )}
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
