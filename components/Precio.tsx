interface PrecioProps {
  importe: number;
}

export default function Precio({ importe }: PrecioProps) {
  return <>$ {importe.toLocaleString('es-AR')}</>;
}
