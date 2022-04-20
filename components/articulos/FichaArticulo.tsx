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
        alt="Foto"
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
  );
}
