import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/LA Function 2024 promo IG 2.MOV';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  // HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
 
    
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay muted loop src={Video} type='video.mp4' />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1><img src="LA_Function_Final corrected.png" height="150" width="150" style={{filter:"invert(100%)"}} alt="la function logo"></img> </HeroH1> */}
        <HeroP>
        LA FUNCTION 2025 TICKETS ON SALE NOW! <br/> 
        </HeroP>
        <HeroBtnWrapper>
          <Button
           
             to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover} 
          >
           FUNCTION TICKETS!{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
