import styled from 'styled-components'
import Select from 'react-select';
import Breakpoints from '../../styles/Breakpoints';

export const StyledSelect = styled(Select)`
  min-width: 100px;
  
  * {
      cursor: pointer;
  }
  
  ${Breakpoints.global(`
    width: 100%;
  `)}
`;