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
        <VideoBg playsInline autoPlay loop src={Video} type='video.mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1><img src="LA-Function-Final-Logo.png" height="150" width="150" style={{filter:"invert(100%)"}} alt="la function logo"></img> </HeroH1>
        <HeroP>
        Summer Finale August 20th! <br/> Tickets on sale now!
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
            Get tickets {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
