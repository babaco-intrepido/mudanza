import Image, { ImageProps } from 'next/image';
import { always, isEmpty, when } from 'ramda';

const placeholder = '/images/placeholder.png';

export default function ImageOrPlaceholder({
  src,
  alt = 'Foto',
  ...props
}: ImageProps) {
  return (
    <Image src={when(isEmpty, always(placeholder), src)} alt={alt} {...props} />
  );
}
