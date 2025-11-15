// src/app/[category]/[programme]/page.js
'use client';

import { usePathname } from 'next/navigation';
import { getCategory, getProgramme } from '../../../data/projects';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function ProgrammePage() {
  const [active, setActive] = useState(null);
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const categorySlug = segments[0];
  const programmeId = segments[1];

  const category = getCategory(categorySlug);
  const programme = getProgramme(categorySlug, programmeId);
  

  if (!category || !programme) {
    return (
      <div style={{ color: 'white', padding: 20 }}>
        <h1>Programme not found</h1>
        <p>Category: {categorySlug}</p>
        <p>Programme: {programmeId}</p>
      </div>
    );
  }


  const Card = styled(Paper)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    '& img': { transition: 'transform 0.25s ease' },
    '&:hover img': { transform: 'scale(1.05)' },
  }));

  const toEmbedUrl = (url) => {
    if (url.includes('youtu.be'))
      return `https://www.youtube.com/embed/${url.split('/').pop().split('?')[0]}`;
    if (url.includes('watch?v='))
      return `https://www.youtube.com/embed/${url.split('v=')[1]}`;
    return url;
  };

  const isYouTube = (url = "") => {
  try {
    const u = new URL(url);
    const host = u.hostname.replace("www.", "").toLowerCase();
    return host.includes("youtube.com") || host.includes("youtu.be");
  } catch {
    // fallback for non-absolute URLs or invalid URLs
    const lower = url.toLowerCase();
    return lower.includes("youtube.com") || lower.includes("youtu.be");
  }
};


  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 6,
      }}
    >

      {/* HEADER SECTION WITH BG */}
      <Box
        sx={{
          mb: 4,
          width: '100%',
          height: { xs: 220, md: 350 },
          px: 2,
          py: 3,
          mt: -6,
          position: 'relative',
          overflow: 'hidden',

          backgroundImage: 'url(/resrcs/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            zIndex: 1,
          },
        }}
      >

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            gap: 2,
          }}
        >
          {/* LEFT (70%) */}
          <Box
            sx={{
              flexBasis: { xs: '100%', md: '70%' },
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              p: 1,
              mt: 2,
              ml: { xs: 0, md: 6 },
            }}
          >
            {/* Breadcrumbs */}
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ color: 'white', mb: 1, fontSize: { xs: 15, md: 24 } }}
            >
              <Link href="/" style={{ color: 'white', opacity: 0.8 }}>Home</Link>
              <Link href={`/${category.slug}`} style={{ color: 'white', opacity: 0.9 }}>
                {category.name}
              </Link>

              <Typography sx={{ color: 'white', fontWeight: 600, fontSize: { xs: 18, md: 24 } }}>
                {programme.title}
              </Typography>
            </Breadcrumbs>

            {/* Big title for desktop */}
            <Typography
              sx={{
                display: { xs: 'none', md: 'block' },
                color: 'white',
                fontWeight: 700,
                fontSize: 38,
                mt: 1,
                fontFamily: 'var(--font-stack-sans-headline)',
              }}
            >
              {programme.title}
            </Typography>

            <p style={{ margin: 0, opacity: 0.9 }}>
              {programme.items.length} episodes
            </p>
          </Box>

          {/* RIGHT (30%) */}
          <Box
            sx={{
              flexBasis: { xs: '100%', md: '30%' },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src={programme.bgimage ?? '/resrcs/pc.png'}
              alt=""
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>
      </Box>

      {/* GRID OF EPISODES */}
      <Box sx={{ width: '100%', maxWidth: '1400px', ml: { xs: 4, md: 'auto' } }}>
  <Grid container spacing={3}>
    {programme.items.map((episode, index) => (
      <Grid key={episode.id} item xs={12} sm={6} md={3}>

        {/* ⭐ Animation Wrapper */}
        <Box
          sx={{
            opacity: 0,
            animation: 'fadeInUp 0.6s ease forwards',
            animationDelay: `${index * 0.32}s`,
          }}
        >
          {/* ⭐ Card now free to handle hover transform */}
          <Card
            onClick={(e) => {
              e.preventDefault();
              window.open(episode.videoUrl, "_blank", "noopener,noreferrer");

            }}
            sx={{
              height: category.slug === "academic" ? 600 : 260,
              width: 400,
              position: 'relative',
              cursor: 'pointer',
            }}
          >

            <Image
              src={episode.image}
              alt={episode.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Card>

        </Box>

      </Grid>
    ))}
  </Grid>
</Box>


      {/* VIDEO MODAL */}
      {active && (
        <Box
          onClick={() => setActive(null)}
          sx={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            p: 2,
          }}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              width: '80%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              backgroundColor: 'black',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 0 20px rgba(0,0,0,0.5)',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={toEmbedUrl(active.videoUrl)}
              title={active.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      )}
    </Box>
  );
}
