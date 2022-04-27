import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Articulo } from '../../lib/articulos';
import FichaArticulo from './FichaArticulo';
import SelectorCategorias, { ChipData } from './SelectorCategorias';
import { isNil, partition } from 'ramda';
import { useRouter } from 'next/router';

export interface ListadoArticulosProps {
  articulos: Articulo[];
  categoriasDisponibles: string[];
  subtitulo: string;
  mostrarPrecio?: boolean;
}

export default function ListadoArticulos({
  articulos,
  categoriasDisponibles,
  subtitulo,
  mostrarPrecio = true,
}: ListadoArticulosProps) {
  const router = useRouter();

  const [categoriasVisibles, setCategoriasVisibles] = React.useState(
    categoriasDisponibles.map((label) => ({ label, enabled: true }))
  );

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    React.useState<string>();

  const articulosVisibles = React.useMemo(
    () =>
      categoriaSeleccionada
        ? articulos.filter((it) => it.categoria === categoriaSeleccionada)
        : articulos,
    [articulos, categoriaSeleccionada]
  );

  const seleccionarCategoria = (seleccionada: string) => {
    setCategoriaSeleccionada(seleccionada);
    setCategoriasVisibles((actual) => {
      const [seleccionadas, resto] = partition(
        (it) => it.label === seleccionada,
        actual
      );
      seleccionadas.forEach((it) => {
        it.enabled = true;
      });
      resto.forEach((it) => {
        it.enabled = false;
      });
      return actual;
    });
  };

  React.useEffect(() => {
    const { categoria } = router.query;
    if (!isNil(categoria)) {
      seleccionarCategoria(categoria as string);
    }
  }, [router.query, router.isReady]);

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{ mb: 3 }}
      >
        Artículos {subtitulo}
      </Typography>
      <Grid mb={5}>
        <SelectorCategorias
          categorias={categoriasVisibles}
          onSelect={seleccionarCategoria}
        />
      </Grid>
      <Grid container spacing={4}>
        {articulosVisibles.map((articulo, index) => (
          <Grid item key={index} xs={12} lg={6}>
            <FichaArticulo articulo={articulo} mostrarPrecio={mostrarPrecio} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
