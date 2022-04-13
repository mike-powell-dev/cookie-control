import styled, { css } from 'styled-components';
import { visuallyHidden } from '../../theme/patterns/visuallyHidden';

const ToggleStyled = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    min-height: 24px;
    position: relative;
    left: -4px;

    input {
      ${visuallyHidden}
    }

    label {
      cursor: pointer;
      display: block;
      font-size: 16px;
      line-height: 24px;
      padding: 4px 4px 4px 52px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        background: ${theme?.toggle?.off?.background};
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px 0 inset;
        height: 24px;
        left: 4px;
        outline: 2px solid transparent;
        transition: all 250ms ease-in-out;
        width: 40px;
      }

      &::after {
        background: #fff;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.9) 1px 1px 3px 0;
        height: 16px;
        left: 8px;
        transition: left 200ms ease-in-out;
        width: 16px;
      }
    }

    &.checked {
      label::before {
        background: ${theme?.toggle?.on?.background};
      }
      label::after {
        left: 24px;
      }

      &:hover {
        label::before {
          background: ${theme?.toggle?.on?.hover};
        }
      }
    }

    &:hover {
      label::before {
        /* outline-color: blue; */
        background: ${theme?.toggle?.off?.hover};
      }
    }

    input:focus + label {
      outline: transparent;
      box-shadow: ${theme?.focusOutlineColor} 0px 0px 0px 3px;
    }
  `}
`;

export default ToggleStyled;
