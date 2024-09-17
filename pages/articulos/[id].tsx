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
import OgTags from '../../components/OgTags';
import Head from 'next/head';

interface DetalleArticuloProps {
  articulo: Articulo;
  siteUrl: string;
}

const nonNil = reject(isNil);

export function makeWhatsAppLink(mensaje: string) {
  return `https://wa.me/541131768003?text=${encodeURIComponent(mensaje)}`;
}

const DetalleArticulo: NextPage<DetalleArticuloProps> = ({
  articulo,
  siteUrl,
}: DetalleArticuloProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const linkWhatsApp = React.useMemo(
    () =>
      makeWhatsAppLink(
        `¡Hola! 👋\nEstoy viendo el sitio de la mudanza y me gustaría comprar *${articulo.titulo}*.\n${siteUrl}/articulos/${articulo.id}`,
      ),
    [articulo, siteUrl],
  );

  const hayMasDeUno = React.useMemo(() => articulo.cantidad > 1, [articulo]);

  const Titular = (
    <>
      {' '}
      <Typography variant="h3" gutterBottom>
        {articulo.titulo}
      </Typography>
      {articulo.destino === 'Vender' && (
        <Typography variant="h4" gutterBottom>
          <Precio importe={articulo.precio} />
          {hayMasDeUno && (
            <Typography ml={1} variant="subtitle1" component="span">
              por unidad
            </Typography>
          )}
        </Typography>
      )}
      {hayMasDeUno && (
        <Typography variant="body1" color="success.main" paragraph>
          {articulo.cantidad} unidades disponibles
        </Typography>
      )}
      <Grid mb={2}>
        <Entrega articulo={articulo} size="medium" />
      </Grid>
    </>
  );

  const Imagenes = (
    <Carrousel
      images={concat(
        [articulo.foto1],
        nonNil([articulo.foto2, articulo.foto3, articulo.foto4]),
      )}
    />
  );

  const DescripcionBoton = (
    <>
      <Head>
        <title>{articulo.titulo}</title>
      </Head>
      <div
        className="remark"
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
        ¡Messirve!
      </Button>
    </>
  );

  return (
    <>
      <OgTags
        title={articulo.titulo}
        description={articulo.descripcionPlain}
        originalImageUrl={articulo.foto1}
        siteUrl={siteUrl}
        path={`articulos/${articulo.id}`}
      />
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
    </>
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
      siteUrl: process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:3000',
    },
  };
};

export default DetalleArticulo;
