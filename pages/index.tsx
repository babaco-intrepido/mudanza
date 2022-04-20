import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { GetStaticProps, NextPage } from 'next';
import { all, Articulo } from '../lib/articulos';
import Link from '../components/Link';
import { imagenConResolucion } from '../lib/imagen';

export interface IndexProps {
  articulos: Articulo[];
  cloudName: string;
}

const Index: NextPage<IndexProps> = ({ articulos, cloudName }) => {
  return (
    <>
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
                    image={imagenConResolucion(articulo.foto1, { height: 500 })}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {articulo.titulo}
                      </Typography>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: articulo.descripcion,
                        }}
                      ></div>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                      <Chip label={articulo.categoria} color="secondary" />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={Link}
                      size="small"
                      href={`/articulos/${articulo.id}`}
                    >
                      Ver
                    </Button>
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

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const articulos = await all();
  return {
    props: {
      articulos,
      cloudName: 'faloi',
    },
  };
};

export default Index;
