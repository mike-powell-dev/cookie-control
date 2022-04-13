import styled from 'styled-components';
import { visuallyHidden } from '../../theme/patterns/visuallyHidden';

const CloseButtonStyled = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &:focus {
    outline: 3px solid ${props => props?.theme?.focusOutlineColor};
  }

  .close__icon::before {
    color: ${props => props.theme?.iconColor};
    content: '\\2716';
    display: block;
    font-size: 32px;
    line-height: 40px;
  }

  .close__label {
    ${visuallyHidden}
  }
`;

export default CloseButtonStyled;
