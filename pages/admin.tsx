import dynamic from 'next/dynamic';
import netlifyCmsConfig from '../lib/netlifyCmsConfig';

const CMS = dynamic(
  // @ts-ignore
  async () => {
    const cms = (await import('netlify-cms-app')).default;
    // @ts-ignore
    const cloudinary = (await import('netlify-cms-media-library-cloudinary'))
      .default;
    cms.registerMediaLibrary(cloudinary);
    cms.init({ config: netlifyCmsConfig });
  },
  { ssr: false, loading: () => <p>Cargando...</p> }
);

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
