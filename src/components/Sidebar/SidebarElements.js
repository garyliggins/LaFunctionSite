import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #0D1B2A 0%, #1A2B3C 100%);
  display: grid;
  align-items: center;
  left: 0;
  transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  list-style: none;
  transition: color 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #FFD166;
    transition: color 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarLinkRoute = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  list-style: none;
  transition: color 0.2s ease-in-out;
  color: #FFD166;
  cursor: pointer;

  &:hover {
    color: #FF6B35;
    transition: color 0.2s ease-in-out;
  }
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #FF6B35;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
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
