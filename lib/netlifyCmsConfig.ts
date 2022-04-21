import { CmsConfig } from 'netlify-cms-core';

const netlifyCmsConfig: CmsConfig = {
  // @ts-ignore
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'babaco-intrepido/mudanza',
    branch: 'main',
  },
  // TODO: ajustar esto para que guarde local
  media_library: {
    name: 'cloudinary',
    config: {
      cloud_name: 'faloi',
      api_key: '518333241246549',
    },
    // @ts-ignore
    output_filename_only: true,
  },
  collections: [
    {
      name: 'articulos',
      label: 'Artículos',
      folder: 'content/articulos',
      identifier_field: 'titulo',
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
          label: 'Categoría',
          name: 'categoria',
          widget: 'string',
        },
        {
          label: 'Foto principal',
          name: 'foto1',
          widget: 'image',
        },
        {
          label: 'Foto adicional 1',
          name: 'foto2',
          widget: 'image',
          required: false,
        },
        {
          label: 'Foto adicional 2',
          name: 'foto3',
          widget: 'image',
          required: false,
        },
      ],
    },
  ],
};

export default netlifyCmsConfig;
