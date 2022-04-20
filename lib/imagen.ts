import type { Resize } from '@cld-apis/types';
import { buildUrl } from 'cloudinary-build-url';
import { isEmpty } from 'ramda';

const placeholder = 'placeholder_oz5mpd.png';

export function imagenConResolucion(nombre: string, resize: Resize) {
  return buildUrl(isEmpty(nombre) ? placeholder : nombre, {
    cloud: { cloudName: 'faloi' },
    transformations: { resize },
  });
}
