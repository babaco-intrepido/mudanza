import type { Resize } from '@cld-apis/types';
import { buildUrl } from 'cloudinary-build-url';
import { isEmpty } from 'ramda';

const placeholder = 'placeholder_oz5mpd.png';

// TODO: no debería ser necesario pero el CMS le está agregando una / al principio.
function sanitizar(nombre: string) {
  return nombre.replace('/', '');
}

// TODO: mover el cloudName a variable de entorno.
export function imagenConResolucion(nombre: string, resize: Resize) {
  return buildUrl(isEmpty(nombre) ? placeholder : sanitizar(nombre), {
    cloud: { cloudName: 'faloi' },
    transformations: { resize },
  });
}
