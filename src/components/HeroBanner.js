import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HeroBannerImage from '../assets/images/banner.png';

const theme = createTheme({
  palette: {
    primary: {
      
      main: '#FF2625',
    },
    secondary: {
   
      main: '#11cb5f',
    },
  },
});


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#FF2625' 
          fontWeight='600' fontSize='26px'
        >
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
          sx={{fontSize: {lg: '44px', xs: '40px'}}}
          mb='23px' mt='30px'
        >
          Sweet, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
          Check out the most effective exercices
        </Typography>
        <ThemeProvider theme={theme}>
          <Button variant="contained" href="#exercises" 
            sx={{ backgroundColor: '#ff2625', padding: '10px'}}
          >Explore Exercices</Button>
        </ThemeProvider>
        <Typography
          fontWeight={600}
          color="#ff2625"
          sx={{
            opacity: 0.1,
            display: { lg: 'block', xs:'none'}
          }}
          fontSize='200px'
        >
          Exercises
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
        
    </Box>
  )
}

export default HeroBanner