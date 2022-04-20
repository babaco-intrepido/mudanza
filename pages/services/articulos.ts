export interface Articulo {
  titulo: string;
  cantidad: number;
  descripcion: string;
  categoria: string;
}

export default async function all(): Promise<Articulo[]> {
  return [
    {
      titulo: 'Ensaladera de gres',
      cantidad: 1,
      descripcion:
        'Diámetro 30cm, alto 15cm. Producto de La Materia Encendida.',
      categoria: 'Vajilla',
    },
    {
      titulo: 'Cuencos de barro',
      cantidad: 6,
      descripcion:
        'Vasijas de barro traidas de Bolivia. Diámetro 15cm. Se pueden meter al horno.',
      categoria: 'Vajilla',
    },
  ];
}
