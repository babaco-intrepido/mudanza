import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import Link from '../components/Link';
import Head from 'next/head';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>¡Nos mudamos!</title>
      </Head>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        ¡Nos vamos de viaje!
      </Typography>
      <Typography variant="h3" align="center" color="text.secondary">
        Y queremos circular todo lo que nos quedó. Algunas cosas están a la
        venta y otras las regalamos.
      </Typography>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button component={Link} variant="contained" href="/venta">
          A la venta
        </Button>
        <Button component={Link} variant="outlined" href="/regalo">
          Regalado
        </Button>
      </Stack>
    </>
  );
};

export default Index;
