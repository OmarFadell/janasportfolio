'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

import { getAllCategories } from '../data/projects';

const Card = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  textAlign: 'center',
  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
  },
}));

export default function Home() {
  const categoryList = getAllCategories();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          mx: { xs: 2, sm: 0, md: 0 },
        }}
      >
        <h1 style={{ color: 'white', margin: 0, fontFamily: 'var(--font-stack-sans-headline)' }}>What are we watching?</h1>

        <Grid container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }} mx={{ xs: 2.6, sm: 8, md: 12 }}>
  {categoryList.map((cat, index) => (
    <Grid key={cat.slug} item xs={1} sm={4} md={4}>
      <Link href={`/${cat.slug}`} style={{ textDecoration: 'none' }}>

        {/* ⭐ Animation Wrapper */}
        <Box
          sx={{
            opacity: 0,
            animation: 'fadeInUp 0.5s ease forwards',
            animationDelay: `${index * 0.22}s`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >

          {/* ⭐ Card now free to hover-scale */}
          <Card
            sx={{
              width: { xs: 150, sm: 160, md: 260 },
              height: { xs: 150, sm: 160, md: 260 },
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 0,
            }}
          >
            <Image
              src={cat.thumbnail}
              alt={cat.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Card>

          <Box
            component="div"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              textShadow: '0 0 6px rgba(0,0,0,0.8)',
              fontFamily: 'var(--font-stack-sans-headline)',
            }}
          >
            {cat.name}
          </Box>

        </Box>

      </Link>
    </Grid>
  ))}
</Grid>

      </Box>
    </Box>
  );
}
