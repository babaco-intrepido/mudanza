import Image, { ImageProps } from 'next/image';
import { always, isNil, when } from 'ramda';
import placeholder from '../public/images/placeholder.png';

export default function ImageOrPlaceholder({
  src,
  alt = 'Foto',
  ...props
}: ImageProps) {
  return (
    <Image
      src={when(isNil, always(placeholder.src), src)}
      alt={alt}
      {...props}
    />
  );
}
