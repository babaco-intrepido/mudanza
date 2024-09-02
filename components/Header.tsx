import ResponsiveAppBar from './ResponsiveAppBar';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

const pages = [
  { name: 'La Movi', href: '/movi', icon: <AirportShuttleIcon /> },
  { name: 'Venta', href: '/venta', icon: <ShoppingCartIcon /> },
  { name: 'Regalo', href: '/regalo', icon: <CardGiftcardIcon /> },
];

const Header = () => {
  return <ResponsiveAppBar pages={pages} />;
};

export default Header;
