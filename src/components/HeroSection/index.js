import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/LA Function 07.06.19.m4v';
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
        <VideoBg playsInline autoPlay loop muted src={Video} type='video.mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>LA Function!!</HeroH1>
        <HeroP>
        LA Function is the place where people who LOVE the LA culture come together under one roof for the most amazing party! Be ready to Function all day to Hip-Hop, R&B, Afro-Beats, Reggaeton & see amazing live performances by today's biggest artists.
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
