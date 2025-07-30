'use client';

import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={2}
      // sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}
    >
      <CircularProgress color="primary" size={60} thickness={5} />
      <Typography variant="h6" color="textSecondary">
        لطفاً منتظر بمانید...
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;