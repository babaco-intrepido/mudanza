import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import Link from './Link';

interface Page {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface ResponsiveAppBarProps {
  pages: Page[];
}

const ResponsiveAppBar = ({ pages }: ResponsiveAppBarProps) => {
  const [showDrawer, setShowDrawer] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setShowDrawer(open);
    };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            underline="none"
            color="inherit"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textTransform: 'uppercase',
            }}
          >
            ¡Vendemos todo!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={showDrawer}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {pages.map(({ name, icon, href }) => (
                    <Link
                      key={name}
                      href={href}
                      underline="none"
                      color="textPrimary"
                    >
                      <ListItem button>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={name} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </SwipeableDrawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, href }) => (
              <Button
                component={Link}
                key={name}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={href}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
