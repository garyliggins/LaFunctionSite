import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/lafuncvid514.mov';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
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
        <HeroH1><img src="LA-Function-Final-Logo.png" height="150" width="150" style={{filter:"invert(100%)"}} alt="la function logo"></img> </HeroH1>
        <HeroP>
        Friends Giving Function November 26th <br/> 
        </HeroP>
        <HeroBtnWrapper>
          <Button
           
            to='signup' //undo this to use button again
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
           Friends Giving Function Tickets {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
