import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '../Link';
import Typography from '@mui/material/Typography';
import { Articulo } from '../../lib/articulos';
import ImageOrPlaceholder from '../ImageOrPlaceholder';
import { Chip, ChipProps, Grid, styled } from '@mui/material';

export interface FichaArticuloProps {
  articulo: Articulo;
}

const RectangularChip = styled(Chip)<ChipProps>((props) => ({
  borderRadius: 0,
}));

export default function FichaArticulo({ articulo }: FichaArticuloProps) {
  return (
    <Link href={`/articulos/${articulo.id}`} underline="none">
      <Card sx={{ display: 'flex' }}>
        <Grid item xs={4}>
          <ImageOrPlaceholder
            src={articulo.foto1}
            alt="Foto"
            width={200}
            height={200}
          />
        </Grid>
        <Grid item xs={8} flexDirection="column">
          <CardContent>
            <Typography gutterBottom variant="subtitle2">
              {articulo.titulo}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              $ 1.500
            </Typography>
            <RectangularChip
              label="Disponible a partir de Junio"
              variant="outlined"
              color="warning"
              size="small"
            />
          </CardContent>
        </Grid>
      </Card>
    </Link>
  );
}
