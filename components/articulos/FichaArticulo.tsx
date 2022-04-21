import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Link from '../Link';
import Typography from '@mui/material/Typography';
import { Articulo } from '../../lib/articulos';
import Image from 'next/image';

export interface FichaArticuloProps {
  articulo: Articulo;
}

export default function FichaArticulo({ articulo }: FichaArticuloProps) {
  return (
    <Link href={`/articulos/${articulo.id}`} underline="none">
      <Card sx={{ display: 'flex' }}>
        <Image src={articulo.foto1} alt="Foto" width={150} height={150} />
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
