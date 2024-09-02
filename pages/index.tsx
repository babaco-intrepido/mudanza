import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import Link from '../components/Link';
import Head from 'next/head';
import Image from 'next/image';
import laMovi from '../public/images/movidesierto.jpg';
import Carrousel from '../components/Carrousel';

const LaMovi = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Nuestra casa sobre ruedas
      </Typography>
      <Typography>
        La Movi es una Sprinter 313 modelo 2010, camperizada en 2022 para que
        puedan vivir cómodamente dos personas. Cuenta con todo lo necesario para
        poder estacionarse en cualquier lugar, sin depender de nada.
      </Typography>
      <Typography>
        Ideal para iniciar una vida sobre ruedas o para poder vacacionar con la
        comodidad de tener tu propio espacio itinerante.
      </Typography>
      <Stack direction="row" justifyContent="center" pt={1}>
        <Button component={Link} variant="contained" href="/movi">
          ¡Quiero saber más!
        </Button>
      </Stack>
    </Stack>
  );
};

const LasCosas = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Y además, ¡nos mudamos!
      </Typography>
      <Typography>
        Una vez que se venda La Movi, nuestro plan es seguir viaje por
        Latinoamérica en un nuevo formato y no podemos cargar mucho en nuestras
        mochilas.
      </Typography>
      <Typography>
        Por este motivo, también queremos circular prácticamente todo lo que
        teníamos en nuestra casita. Algunas cosas están a la venta y otras las
        ofrecemos de regalo para quienes nos compren algo.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" pt={1}>
        <Button component={Link} variant="contained" href="/venta">
          A la venta
        </Button>
        <Button component={Link} variant="outlined" href="/regalo">
          De regalo
        </Button>
      </Stack>
    </Stack>
  );
};

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>¡Nos mudamos!</title>
      </Head>
      <Stack spacing={3}>
        <Typography variant="h2" align="center" color="text.primary">
          ¡Se vende La Movi!
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Somos Andre, Fede y Saywa, una familia viajera que se agrandó en el
          camino y necesita vender su casa para poder seguir viajando.
        </Typography>
        <Carrousel
          images={[laMovi.src, laMovi.src, laMovi.src]}
          maxWidth="100%"
          width={1600}
          height={900}
        />
        <LaMovi />
        <LasCosas />
      </Stack>
    </>
  );
};

export default Index;
