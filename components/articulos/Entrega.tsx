import { Chip, ChipProps, Grid, styled } from '@mui/material';
import { Articulo } from '../../lib/articulos';

const RectangularChip = styled(Chip)<ChipProps>(() => ({
  borderRadius: 5,
}));

export interface EntregaProps {
  articulo: Articulo;
  size: 'small' | 'medium';
}

export default function Entrega({ articulo, size }: EntregaProps) {
  return articulo.entrega ? (
    <RectangularChip
      label={`Disponible a partir de ${articulo.entrega}`}
      variant="outlined"
      color="warning"
      size={size}
    />
  ) : (
    <></>
  );
}
