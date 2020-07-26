import styled from 'styled-components'
import Fonts from '../../styles/Fonts';
import Breakpoints from '../../styles/Breakpoints';

export const StyledDeveloperName = styled.h1`
  display: inline-block;
  ${Fonts.getFontSerif()}
  vertical-align: middle;
  margin: 0;
  line-height: 25px;
  
  ${Breakpoints.global(`
    display: block;
    text-align: center;
  `)}
`;

export const StyledName = styled.span`
  font-size: 26px;
  margin-left: 10px;
  vertical-align: middle;
  
   ${Breakpoints.global(`
    display: block;
  `)}
`;

interface StyledLogoType {
  src : string
}
export const StyledLogo = styled.figure`
  background-image: url(${(props : StyledLogoType) => props.src});
  background-size: cover;
  border-radius: 50px;
  display: inline-block;
  height: 42px;
  margin: 0;
  vertical-align: middle;
  width: 42px;
`;