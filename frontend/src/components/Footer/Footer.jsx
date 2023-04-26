import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer>
      <Box sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0
      }} textAlign={'center'} py={2} m={0} color={'black'}>
        <Typography>© Reboot Academy {year} - All Rights Reserved</Typography>
      </Box>
    </footer>
  )
}

export default Footer