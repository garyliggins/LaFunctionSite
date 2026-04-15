import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0D1B2A;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
`;

export const FooterWrap = styled.div`
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: #FFD166;
    transition: color 0.2s ease;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 24px auto 0 auto;
  gap: 16px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
`;

export const SocialLogo = styled(Link)`
  color: #FF6B35;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: 800;
  letter-spacing: 1px;
  transition: color 0.2s ease;

  &:hover {
    color: #FFD166;
  }
`;

export const WebsiteRights = styled.small`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SocialIconLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-size: 22px;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #FFD166;
    transform: translateY(-2px);
  }
`;
