import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { Button, Card, CardActionArea, Grid } from '@mui/material';
import Image from 'next/image';

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
        <Typography variant="h1" sx={{ mb: 1 }}>
          Open Zero
        </Typography>
        <Typography sx={{ mb: 1 }}>Open source software</Typography>
        <Button href="https://github.com/open-zero" sx={{ mb: 4 }}>
          GitHub
        </Button>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardActionArea sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Image
                    src="/images/hello-recipes-logo.svg"
                    alt="hello recipes"
                    width={100}
                    height={100}
                  />
                </Box>
                <Typography variant="h2">Hello Recipes</Typography>
                <Typography sx={{ mb: 2 }}>
                  Save, savor, and share recipes. A modern recipe manager.
                </Typography>
                <Button
                  href="https://hellorecipes.com"
                  target="_blank"
                  variant="contained"
                  size="small"
                  fullWidth
                >
                  Hello Recipes
                </Button>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
