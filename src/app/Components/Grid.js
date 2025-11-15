import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.25s ease, box-shadow 0.25s ease',

  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
    zIndex: 10,
  },

  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, mx: '50px' }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}   sx={{ overflow: 'hidden' }}
>
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 1, sm: 4, md: 4 }}>
            <Item sx={{ position: 'relative', width: '100%', height: '305px' }}>
                <Image
                    src="/resrcs/pc.png"
                    alt="Image"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                </Item>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}