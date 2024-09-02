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
    <Stack>
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
      <Stack direction="row" justifyContent="center">
        <Button component={Link} variant="contained" href="/venta">
          ¡Quiero saber más!
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
        {/* <Stack direction="row" spacing={2} justifyContent="center">
          <Button component={Link} variant="contained" href="/venta">
            A la venta
          </Button>
          <Button component={Link} variant="outlined" href="/regalo">
            Regalado
          </Button>
        </Stack> */}
        <Carrousel
          images={[laMovi.src, laMovi.src, laMovi.src]}
          maxWidth="100%"
          width={1600}
          height={900}
        />
        <LaMovi />
      </Stack>
    </>
  );
};

export default Index;
