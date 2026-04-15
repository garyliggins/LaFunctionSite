import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 50px;
  background: #FF6B35;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: 700;
  letter-spacing: 1px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #FFD166;
    color: #0D1B2A;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;
export default Button