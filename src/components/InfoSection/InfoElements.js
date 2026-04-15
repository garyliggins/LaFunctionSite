import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#FFF5E6' : '#0D1B2A')};
  padding: 80px 0;

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  gap: 48px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'col1' 'col2';
    gap: 32px;
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  padding: 0;
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding: 0;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const TopLine = styled.div`
  color: #FF6B35;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 38px;
  line-height: 1.15;
  font-weight: 800;
  color: ${({ lightText }) => (lightText ? '#fff' : '#0D1B2A')};

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.p`
  max-width: 480px;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 1.7;
  color: ${({ darkText }) => (darkText ? '#1A2B3C' : 'rgba(255,255,255,0.85)')};

  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 15px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  display: block;
`;
