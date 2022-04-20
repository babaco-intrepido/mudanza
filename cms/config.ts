import { NetlifyCmsConfig } from './types';

const config: NetlifyCmsConfig = {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'babaco-intrepido/mudanza',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'articulos',
      label: 'Artículos',
      folder: 'content/articulos',
      create: true,
      fields: [
        {
          label: 'Título',
          name: 'titulo',
          widget: 'string',
        },
        {
          label: 'Descripción',
          name: 'descripcion',
          widget: 'markdown',
        },
        {
          label: 'Cantidad',
          name: 'cantidad',
          widget: 'number',
        },
        {
          label: 'Categorías',
          name: 'categorias',
          widget: 'list',
        },
      ],
    },
  ],
};

export default config;
