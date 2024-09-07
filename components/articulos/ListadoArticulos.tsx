import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Articulo } from '../../lib/articulos';
import FichaArticulo from './FichaArticulo';
import SelectorCategorias, { ChipData } from './SelectorCategorias';
import { isNil, partition, sortBy } from 'ramda';
import { useRouter } from 'next/router';

export interface ListadoArticulosProps {
  articulos: Articulo[];
  categoriasDisponibles: string[];
  subtitulo: string;
  mostrarPrecio?: boolean;
}

function sortByReservado(articulos: Articulo[]): Articulo[] {
  return sortBy((it) => (it.reservado ? 1 : 0), articulos);
}

export default function ListadoArticulos({
  articulos,
  categoriasDisponibles,
  subtitulo,
  mostrarPrecio = true,
}: ListadoArticulosProps) {
  const router = useRouter();

  const [categoriasVisibles, setCategoriasVisibles] = React.useState(
    categoriasDisponibles.map((label) => ({ label, enabled: true })),
  );

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    React.useState<string>();

  const articulosVisibles = React.useMemo(
    () =>
      sortByReservado(
        categoriaSeleccionada
          ? articulos.filter((it) => it.categoria === categoriaSeleccionada)
          : articulos,
      ),
    [articulos, categoriaSeleccionada],
  );

  const seleccionarCategoria = React.useCallback(
    (seleccionada: string, actualizarQuery = true) => {
      setCategoriaSeleccionada(seleccionada);
      setCategoriasVisibles((actual) => {
        const [seleccionadas, resto] = partition(
          (it) => it.label === seleccionada,
          actual,
        );
        seleccionadas.forEach((it) => {
          it.enabled = true;
        });
        resto.forEach((it) => {
          it.enabled = false;
        });
        return actual;
      });

      if (actualizarQuery) {
        router.replace({ query: { categoria: seleccionada } });
      }
    },
    [router],
  );

  React.useEffect(() => {
    const { categoria } = router.query;
    if (!isNil(categoria)) {
      seleccionarCategoria(categoria as string, false);
    }
  }, [router.query, router.isReady, seleccionarCategoria]);

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
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {articulosVisibles.map((articulo, index) => (
          <Grid item key={index} xs={12} lg={6}>
            <FichaArticulo articulo={articulo} mostrarPrecio={mostrarPrecio} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
