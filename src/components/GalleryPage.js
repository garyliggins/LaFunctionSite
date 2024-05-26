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

const GallerySection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
}) => {
  console.log(primary);

  return (
    <>
      <InfoContainer lightBg={{lightBg}} id='discover'>
        <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
                <TopLine>Photo Gallery</TopLine>
                <Heading darkText={{darkText}}>LA Function Gallery</Heading>
                <Subtitle darkText={{darkText}}>
                  Past special guests &
                  Past special guests & performances include:
    Ty Dolla $ign, Hit-Boy, Blxst, Dom Kennedy, YG, Eric Bellinger, Will.i.am, Jay Rock, Kamaiyah, OT Genasis, DJ Mustard, Buddy, Christina Milian, The Game, India Love, SOBxRBE, Trey Songz, P-Lo, Iamsu, Pro Skater Stevie Williams, Big Boy, J Cruz, Jay 305, Blue Bucks Clan, Casey Veggies, Kalan.frfr, D.Smoke, Kurupt & Daz, & many more!
                </Subtitle>
                <BtnWrap>
                  <Button to="lafunctiongallery"
                  >ENTER GALLERY</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
              <Img src={theGameImage} />
            </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default GallerySection;
