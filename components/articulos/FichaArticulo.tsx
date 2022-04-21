import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Link from '../Link';
import Typography from '@mui/material/Typography';
import { imagenConResolucion } from '../../lib/imagen';
import { Articulo } from '../../lib/articulos';

export interface FichaArticuloProps {
  articulo: Articulo;
}

export default function FichaArticulo({ articulo }: FichaArticuloProps) {
  return (
    <Link href={`/articulos/${articulo.id}`} underline="none">
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          image={imagenConResolucion(articulo.foto1, { width: 150 })}
          alt="Foto"
          sx={{ width: 150 }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Box sx={{ mb: 1 }}>
              <Typography gutterBottom variant="subtitle1">
                {articulo.titulo}
              </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Chip label={articulo.categoria} color="secondary" />
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
}
