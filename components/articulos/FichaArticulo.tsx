import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '../Link';
import Typography from '@mui/material/Typography';
import { Articulo } from '../../lib/articulos';
import ImageOrPlaceholder from '../ImageOrPlaceholder';
import Precio from '../Precio';
import { Grid } from '@mui/material';
import Entrega from './Entrega';
import { RectangularChip } from '../common/MuiOverrides';
import { Case, Switch } from 'react-if';

export interface FichaArticuloProps {
  articulo: Articulo;
  mostrarPrecio: boolean;
}

export default function FichaArticulo({
  articulo,
  mostrarPrecio,
}: FichaArticuloProps) {
  const Contenido = (
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
          <Typography gutterBottom variant="subtitle1">
            {articulo.titulo}
          </Typography>
          <Switch>
            <Case condition={articulo.reservado}>
              <RectangularChip
                sx={{ mb: 0.5 }}
                size="small"
                label="Reservado"
                color="error"
              />
            </Case>
            <Case condition={mostrarPrecio}>
              <Typography gutterBottom variant="h6">
                <Precio importe={articulo.precio} />
              </Typography>
            </Case>
          </Switch>

          {articulo.cantidad > 1 && (
            <Typography variant="body2" color="success.main" paragraph>
              {articulo.cantidad} unidades disponibles
            </Typography>
          )}
          <Entrega articulo={articulo} size="small" />
        </CardContent>
      </Grid>
    </Card>
  );

  return articulo.reservado ? (
    Contenido
  ) : (
    <Link href={`/articulos/${articulo.id}`} underline="none">
      {Contenido}
    </Link>
  );
}
