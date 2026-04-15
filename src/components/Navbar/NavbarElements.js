import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? 'rgba(13, 27, 42, 0.95)' : 'transparent'};
  backdrop-filter: ${({ scrollNav }) => (scrollNav ? 'blur(10px)' : 'none')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background 0.4s ease, backdrop-filter 0.4s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 32px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 800;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  transition: color 0.2s ease;

  &:hover {
    color: #FFD166;
  }

  &.active {
    border-bottom: 3px solid #FF6B35;
    color: #FF6B35;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #FF6B35;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #FFD166;
    color: #0D1B2A;
    transition: all 0.2s ease-in-out;
  }
`;
