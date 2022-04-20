import dynamic from 'next/dynamic';
import config from '../cms/config';

const CMS = dynamic(
  async () => {
    const cms = (await import('netlify-cms-app')).default;
    const cloudinary = (await import('netlify-cms-media-library-cloudinary'))
      .default;
    cms.registerMediaLibrary(cloudinary);
    cms.init({ config });
  },
  { ssr: false, loading: () => <p>Cargando...</p> }
);

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
