import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export interface ChipData {
  label: string;
  enabled: boolean;
}

interface SelectorCategoriasProps {
  categorias: ChipData[];
  onSelect(item: string): void;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function SelectorCategorias({
  categorias,
  onSelect,
}: SelectorCategoriasProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {categorias.map((data, index) => {
        return (
          <ListItem key={index}>
            <Chip
              color={data.enabled ? 'primary' : 'default'}
              label={data.label}
              icon={data.enabled ? <VisibilityIcon /> : <VisibilityOffIcon />}
              onClick={() => onSelect(data.label)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
