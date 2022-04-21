import Image, { ImageProps } from 'next/image';
import { always, isNil, when } from 'ramda';

const placeholder = '/images/placeholder.png';

export default function ImageOrPlaceholder({
  src,
  alt = 'Foto',
  ...props
}: ImageProps) {
  console.log({ src: when(isNil, always(placeholder), src) });
  return (
    <Image src={when(isNil, always(placeholder), src)} alt={alt} {...props} />
  );
}
