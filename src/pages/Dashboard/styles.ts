import styled, { css } from 'styled-components';
import { shade } from 'polished';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 100px;
  max-width: 433px;
`;

export const Form = styled.form<FormProps>`
  max-width: 714px;
  display: flex;
  margin-top: 40px;

  input {
    flex: 1;
    height: 72px;
    border-radius: 5px 0 0 5px;
    border: 0;
    padding: 24px 29px;
    background: #ffffff;
    color: #a8a8b3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #ffffff;

    ${props =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: #c53030;
`;

export const Repository = styled.div`
  max-width: 714px;
  margin-top: 120px;

  a {
    width: 100%;
    padding: 24px;
    background: #ffffff;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.5s;

    &:hover {
      transform: translateX(20px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div {
      margin: 0 24px;
      flex: 1;

      strong {
        color: #3d3d4d;
        font-size: 24px;
        line-height: 28px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        line-height: 21px;
      }
    }
    svg {
      color: #c9c9d4;
      margin-left: auto;
    }
  }
`;
