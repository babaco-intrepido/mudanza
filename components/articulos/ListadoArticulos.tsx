import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Articulo } from '../../lib/articulos';
import FichaArticulo from './FichaArticulo';
import SelectorCategorias, { ChipData } from './SelectorCategorias';
import { partition } from 'ramda';

export interface ListadoArticulosProps {
  articulos: Articulo[];
  categoriasDisponibles: string[];
}

export default function ListadoArticulos({
  articulos,
  categoriasDisponibles,
}: ListadoArticulosProps) {
  const [categoriasVisibles, setCategoriasVisibles] = React.useState(
    categoriasDisponibles.map((label, key) => ({ key, label, enabled: true }))
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

  const handleDelete = (chipToDelete: ChipData) => {
    setCategoriaSeleccionada(chipToDelete.label);
    setCategoriasVisibles((actual) => {
      const [seleccionadas, resto] = partition(
        (it) => it.key === chipToDelete.key,
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

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{ mb: 3 }}
      >
        Artículos a la venta
      </Typography>
      <Grid mb={5}>
        <SelectorCategorias
          categorias={categoriasVisibles}
          onItemDelete={handleDelete}
        />
      </Grid>
      <Grid container spacing={4}>
        {articulosVisibles.map((articulo, index) => (
          <Grid item key={index} xs={12} lg={6}>
            <FichaArticulo articulo={articulo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
