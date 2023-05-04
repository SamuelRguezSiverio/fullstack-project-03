import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer>
      <Box sx={{
        width: '100%',
        backgroundColor: 'blue',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }} textAlign={'center'} py={0} m={0} color={'white'}>
        <Typography>© Reboot Academy {year} - All Rights Reserved</Typography>
      </Box>
    </footer>
  )
}

export default Footer