import Head from 'next/head';
import { isNil } from 'ramda';
import placeholder from '../public/images/placeholder.png';

export interface OgTagsProps {
  title: string;
  description: string;
  originalImageUrl: string;
  siteUrl: string;
  path?: string;
}

// Produce algo como https://mudanza.vercel.app/_next/image?url=%2Fimages%2Farticulos%2Fbiblio2.jpg&w=750&q=75.
// Ojo: solo va a funcionar si width y quality son generados por Next.
// Ver https://nextjs.org/docs/api-reference/next/image#device-sizes para los valores por defecto.
function makeNextImagePath(path: string, width: number, quality: number) {
  return `_next/image?url=${encodeURIComponent(path)}&w=${width}&q=${quality}`;
}

export function getImagePath(originalImageUrl: string) {
  if (isNil(originalImageUrl)) {
    return placeholder.src;
  }

  if (originalImageUrl.startsWith('/')) {
    return originalImageUrl;
  }

  const urlWithProtocol = originalImageUrl.startsWith('http')
    ? originalImageUrl
    : `http://${originalImageUrl}`;
  return new URL(urlWithProtocol).pathname;
}

export default function OgTags({
  title,
  description,
  originalImageUrl,
  siteUrl,
  path = '',
}: OgTagsProps) {
  const site = '¡Nos mudamos!';
  const imagePath = getImagePath(originalImageUrl);
  const imageUrl = `//${siteUrl}/${makeNextImagePath(imagePath, 640, 75)}`;

  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={imageUrl}></meta>
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={site} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:url" content={`${siteUrl}/${path}`}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={imageUrl}></meta>
    </Head>
  );
}
