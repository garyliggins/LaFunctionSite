import React from "react";
// import styled from "styled-components";
import Button from "../components/ButtonExternal";
import theGameImage from "../images/theGameLaFunc.png";
import {
  TopLine,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoSection/InfoElements";

const GallerySection = () => {
  return (
    <>
      <InfoContainer lightBg={true} id='discover'>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <TopLine>Photo Gallery</TopLine>
                <Heading lightText={false}>LA Function Gallery</Heading>
                <Subtitle darkText={true}>
                  Past special guests &amp; performances include:
                  Ty Dolla $ign, Hit-Boy, DJ Quik, Blxst, Dom Kennedy, YG, Eric Bellinger, Will.i.am, Jay Rock, Kamaiyah, OT Genasis, DJ Mustard, Buddy, Christina Milian, The Game, India Love, SOBxRBE, Trey Songz, P-Lo, Iamsu, Pro Skater Stevie Williams, Big Boy, J Cruz, Jay 305, Blue Bucks Clan, Casey Veggies, Kalan.frfr, D.Smoke, Kurupt &amp; Daz, &amp; many more!
                </Subtitle>
                <BtnWrap>
                  <Button to="lafunctiongallery">ENTER GALLERY</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={theGameImage} alt="The Game at LA Function" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default GallerySection;
