import styled, { css } from 'styled-components';

const UpdatePreferencesStyled = styled.div`
  ${({ theme }) => css`
    *:focus {
      outline: transparent;
      box-shadow: ${theme?.focusOutlineColor} 0px 0px 0px 3px;
    }

    .zen-cc-up__modal {
      background: ${theme?.background};
      bottom: 0;
      box-shadow: -5px 0 10px rgba(0, 0, 0, 0.4);
      left: 100%;
      max-width: 90vw;
      overflow: hidden;
      padding: 16px 0;
      position: fixed;
      top: 0;
      transition: transform 400ms ease-in-out;
      width: 350px;
      z-index: ${theme?.zIndex};
    }

    &.open {
      &::before {
        background: rgba(0, 0, 0, 0.25);
        bottom: 0;
        content: '';
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: ${theme?.zIndex};
      }
      & > .zen-cc-up__modal {
        transform: translateX(-100%);
      }
    }

    &.closed > .zen-cc-up__modal {
      transform: translateX(0);
    }

    .zen-cc-up__inner {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 16px;
    }

    .zen-cc-up__close {
      text-align: right;
    }

    .zen-cc-up__title {
      color: ${theme?.h1?.color};
      font-family: ${theme?.h1?.fontFamily};
      font-size: ${theme?.h1?.fontSize};
      font-weight: ${theme?.h1?.fontWeight};
      line-height: ${theme?.h1?.lineHeight};
      margin: 0;
    }

    .zen-cc-up__section {
      border-bottom: 1px solid ${theme?.divideColor};
      padding: 24px 0;
    }

    .zen-cc-up__heading {
      color: ${theme?.h2?.color};
      font-family: ${theme?.h2?.fontFamily};
      font-size: ${theme?.h2?.fontSize};
      font-weight: ${theme?.h2?.fontWeight};
      line-height: ${theme?.h2?.lineHeight};
    }

    .zen-cc-up__summary,
    .zen-cc-up__content {
      color: ${theme?.text?.color};
      font-family: ${theme?.text?.fontFamily};
      font-size: ${theme?.text?.fontSize};
      font-weight: ${theme?.text?.fontWeight};
      line-height: ${theme?.text?.lineHeight};
      margin-top: 16px;

      a {
        color: ${theme?.linkColor};
      }
    }

    .zen-cc-toggle {
      margin-top: 16px;
    }

    .zen-cc-up__save {
      margin-top: 24px;
    }
  `}
`;

export default UpdatePreferencesStyled;
