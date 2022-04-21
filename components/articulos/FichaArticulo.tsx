import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '../Link';
import Typography from '@mui/material/Typography';
import { Articulo } from '../../lib/articulos';
import ImageOrPlaceholder from '../ImageOrPlaceholder';
import { Grid } from '@mui/material';

export interface FichaArticuloProps {
  articulo: Articulo;
}

export default function FichaArticulo({ articulo }: FichaArticuloProps) {
  return (
    <Link href={`/articulos/${articulo.id}`} underline="none">
      <Card sx={{ display: 'flex' }}>
        <Grid item xs={4} md={2}>
          <ImageOrPlaceholder
            src={articulo.foto1}
            alt="Foto"
            width={200}
            height={200}
          />
        </Grid>
        <Grid item xs={8} md={10} flexDirection="column">
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography gutterBottom variant="subtitle1">
                {articulo.titulo}
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Card>
    </Link>
  );
}
