import type { Resize } from '@cld-apis/types';
import { buildUrl } from 'cloudinary-build-url';

export function imagenConResolucion(nombre: string, resize: Resize) {
  return buildUrl(nombre, {
    cloud: { cloudName: 'faloi' },
    transformations: { resize },
  });
}
