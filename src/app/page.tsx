import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          Open Zero
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Open source software. More to come :)
        </Typography>
        <Button href="https://github.com/open-zero">GitHub</Button>
      </Box>
    </Container>
  );
}
