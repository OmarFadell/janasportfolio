// src/app/[category]/page.js
'use client';

import { usePathname } from 'next/navigation';
import { getCategory, getAllCategories } from '../../data/projects';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';



export default function CategoryPage({ params }) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const slug = segments[segments.length - 1];

  const category = getCategory(slug);

  if (!category) {
    return (
      <div style={{ color: 'white', padding: 20 }}>
        <h1>Category not found</h1>
        <p>params: {params.category}</p>
        <p>Slug: {slug}</p>
      </div>
    );
  }

  const Card = styled(Paper)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(2),
    textAlign: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 0.25s ease, boxShadow 0.25s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
    },
  }));

return (
    <Box sx={{ flexGrow: 1, mx: 'auto', my: { xs: 5, md: 10 }, maxWidth: 1000, px: 2, ml: { xs: 3, md: 'auto' } }}>

            <Box sx={{ mb: 3 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'white' }}>
                <Link
                    href="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        opacity: 0.8,
                    }}
                >
                    Home
                </Link>
                <Typography sx={{ color: 'white', fontWeight: 600 }}>
                    {category.name}
                </Typography>
            </Breadcrumbs>
        </Box>
        <Grid container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
        {category.items.map((programme, index) => (
          <Grid key={programme.id} item xs={1} sm={4} md={4}>
            {/* Link to the next level: /peacecake/martabetelsharaf */}
            <Link
              href={`/${slug}/${programme.id}`}
              style={{ textDecoration: 'none' }}
            >
              {/* 👇 Animation wrapper – owns opacity + transform */}
              <Box
                sx={{
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease forwards',
                  animationDelay: `${index * 0.32}s`,
                }}
              >
                {/* 👇 Card now only handles hover (scale, boxShadow) */}
                <Card
                  sx={{
                    height: category.slug === 'academic' ? 405 : 205,
                    width: 300,
                    position: 'relative',
                  }}
                >
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      left: 0,
                      right: 0,
                      color: 'white',
                      fontWeight: 'bold',
                      textShadow: '0 0 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    {programme.title}
                  </Box>
                </Card>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>

    </Box>
);
}
