import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NextPage } from 'next';

export type Categoria = string;
export interface Articulo {
  titulo: string;
  cantidad: number;
  descripcion: string;
  categorias: Categoria[];
}
export interface IndexProps {
  articulos: Articulo[];
}

const Index: NextPage<IndexProps> = ({ articulos }) => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {articulos.map((articulo, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {articulo.titulo}
                      </Typography>
                      <Typography>{articulo.descripcion}</Typography>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                      <Stack direction="row" spacing={1}>
                        {articulo.categorias.map((it, index) => (
                          <Chip key={index} label={it} color="secondary" />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Ver</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      articulos: [
        {
          titulo: 'Ensaladera de gres',
          cantidad: 1,
          descripcion:
            'Diámetro 30cm, alto 15cm. Producto de La Materia Encendida.',
          categorias: ['Vajilla'],
        },
        {
          titulo: 'Cuencos de barro',
          cantidad: 6,
          descripcion:
            'Vasijas de barro traidas de Bolivia. Diámetro 15cm. Se pueden meter al horno.',
          categorias: ['Vajilla'],
        },
      ],
    },
  };
}

export default Index;
