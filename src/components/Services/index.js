import React from 'react';
import Icon1 from '../../images/clippersLaFunc.png';
import Icon2 from '../../images/dodgersLaFunc.png';
import Icon3 from '../../images/kingsLaFunc.png';
import Icon4 from '../../images/lakersLaFunc.png';
import Icon5 from '../../images/ramsLaFunc.png';
import Icon6 from '../../images/socksLafunc.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Merch section</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>merch 1</ServicesH2>
          <ServicesP>
            merch description 1
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>merch 2</ServicesH2>
          <ServicesP>
            merch description 2
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>merch 3</ServicesH2>
          <ServicesP>
            merch description 3
          </ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>merch 4</ServicesH2>
          <ServicesP>
            merch description 4
          </ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>merch 5</ServicesH2>
          <ServicesP>
            merch description 5
          </ServicesP>
        </ServicesCard> 
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>merch 6</ServicesH2>
          <ServicesP>
            merch description 6
          </ServicesP>
        </ServicesCard> 
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
