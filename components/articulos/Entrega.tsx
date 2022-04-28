import { Articulo } from '../../lib/articulos';
import { RectangularChip } from '../common/MuiOverrides';

export interface EntregaProps {
  articulo: Articulo;
  size: 'small' | 'medium';
}

export default function Entrega({ articulo, size }: EntregaProps) {
  return articulo.entrega ? (
    <RectangularChip
      label={`Entrega a partir de ${articulo.entrega}`}
      variant="outlined"
      color="warning"
      size={size}
    />
  ) : (
    <></>
  );
}
