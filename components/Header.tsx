import ResponsiveAppBar from './ResponsiveAppBar';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = [
  { name: 'Venta', href: '/venta', icon: <ShoppingCartIcon /> },
  { name: 'Regalo', href: '/regalo', icon: <CardGiftcardIcon /> },
];

const Header = () => {
  return <ResponsiveAppBar pages={pages} />;
};

export default Header;
