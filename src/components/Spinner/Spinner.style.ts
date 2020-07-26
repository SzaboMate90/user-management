import styled from 'styled-components'
import { blockBackground, primary } from '../../styles/Colors';

type HexToRgbType = {
  r : number,
  g : number,
  b : number
};
function hexToRgb(hex: string) : HexToRgbType {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {
    r : 0,
    g : 0,
    b : 0
  };
}
const primaryRgb = hexToRgb(primary);
const {r, g, b} = primaryRgb;

export const StyledSpinner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: ${primary};
  background: linear-gradient(to right, ${primary} 10%, rgba(${r},${g},${b}, 0) 42%);
  position: relative;
  animation: spinner 1.4s infinite linear;
  transform: translateZ(0);
  
  &:before {
    width: 50%;
    height: 50%;
    background: ${primary};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: ${blockBackground};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;