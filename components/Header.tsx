import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from './Link';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href="/" variant="h6" color="inherit" underline="none" noWrap>
          ¡Vendemos todo!
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
