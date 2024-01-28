import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 104px;
    padding: 22px 83px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 10;

    background-color: #fff;
`
export const expandedLogoAnimation = keyframes`
  from {
    width: 61px;
    padding: 14px 14px ;
    background-color: #E40F0F;
  }
  to {
    width: 259px;
    height: 61px;
    border-radius: 50px;
    padding: 14px 14px ;
    background-color: #E40F0F;
  }
`;

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;

  &:hover {
    width: 259px;

    .ExpandedLogo {
      animation: ${expandedLogoAnimation} 0.5s forwards;
    }

    .logo-text {
      animation: ${fadeInAnimation} 0.7s forwards;
    }
  }
`;

export const ExpandedLogo = styled.div`
  height: 61px;
  width: 259px ;
  padding: 14px 14px;
  display: block;
`;

export const ReducedLogo = styled.div`
  height: 61px;
  width: 61px;
  padding: 14px 12px;
  display: block;
  border-radius: 50px;

  background-color: #E40F0F;
`;

export const LogoText = styled.span`
  position: absolute;
  top: 60%;
  transform: translateY(-90%);
  left: 150px;
  color: #ffff; 
  font-weight: 700;
  font-size: 20px;
  opacity: 0;
`;
export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    a {
      text-decoration: none;
    }
    p{
        color: #000;
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        cursor: pointer;
    }
    div{
        cursor: pointer;
        width: 172px;
        height: 42px;
        padding: 12px 24px;
        border-radius: 30px;

        background-color: #E40F0F;
        color: #ffff;
        font-size: 14px;
        font-weight: 700;
    }
`