import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/material';
import { makeWhatsAppLink } from '../pages/articulos/[id]';

const WhatsAppFab = () => {
  const handleClick = () => {
    window.open(
      makeWhatsAppLink('¡Hola! 👋\nMe interesa saber más sobre la Movi.'),
      '_blank',
    );
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 32 },
        right: { xs: 16, md: 32 },
      }}
    >
      <Fab color="success" aria-label="whatsapp" onClick={handleClick}>
        <WhatsAppIcon fontSize="large" />
      </Fab>
    </Box>
  );
};

export default WhatsAppFab;
