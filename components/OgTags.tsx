import Head from 'next/head';

export interface OgTagsProps {
  title: string;
  description: string;
  imagePath: string;
  siteUrl: string;
  path?: string;
}

export default function OgTags({
  title,
  description,
  imagePath,
  siteUrl,
  path = '',
}: OgTagsProps) {
  const site = '¡Nos mudamos!';

  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={imagePath}></meta>
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={site} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:url" content={`${siteUrl}/${path}`}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={imagePath}></meta>
    </Head>
  );
}
