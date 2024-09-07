import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '../components/Link';

const Seccion = ({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h5">{titulo}</Typography>
      {children}
    </Stack>
  );
};

const Item = ({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <strong>{titulo}: </strong>
      {children}
    </li>
  );
};

const Movi: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>La Movi | ¡Nos mudamos!</title>
      </Head>
      <Stack spacing={3}>
        <Typography variant="h2" align="center">
          La Movi
          <Typography variant="h6" fontWeight="bold" color="success.main">
            Precio de venta: u$s 25.000
          </Typography>
        </Typography>
        <Seccion titulo="🚐 Vehículo">
          <Typography>
            Mercedes Benz Sprinter 313 modelo 2010. La compramos con 500.000
            kilómetros y le hicimos unos 35.000 más. Siempre se mantuvo a
            conciencia, con cambios de filtros y aceite cada 5000 kilómetros.
          </Typography>
          <Typography>
            Tenemos un registro de todas las partes que fuimos cambiando durante
            estos 2 años, como por ejemplo:
            <ul>
              <Item titulo="Embrague">colocado nuevo en 2023.</Item>
              <Item titulo="Bomba de agua">colocado nuevo en 2023.</Item>
              <Item titulo="Cubiertas">compradas en 2022.</Item>
              <Item titulo="Suspensión">
                amortiguadores traseros y elásticos delanteros nuevos.
              </Item>
              <Item titulo="Frenos">pastillas y discos nuevos.</Item>
            </ul>
          </Typography>
        </Seccion>
        <Seccion titulo="⚡ Electricidad">
          <Typography>
            Cuenta con un sistema solar con 2 baterías, que garantiza autonomía
            total de la red eléctrica. Luces LED cálidas en toda la camioneta,
            seis enchufes, cuatro tomas USB y dos tomas 12v (tipo encendedor).
          </Typography>
          <Typography>
            Detalles del sistema:
            <ul>
              <li>Panel Solar 72 celdas 400Wp (Bifacial)</li>
              <li>
                Inversor Growatt FV Off Grid con 1 regulador MPPT 3000VA (3000W)
              </li>
              <li>
                Bateria Plomo-Ácido ULTRACELL VRLA GEL sin mantenimiento
                12V275AH
              </li>
              <li>
                Cargador DC-DC Orion Smart 18A Victron (para cargar las baterías
                con el alternador sin afectar a la batería de servicio)
              </li>
            </ul>
          </Typography>
        </Seccion>
      </Stack>
    </>
  );
};

export default Movi;
