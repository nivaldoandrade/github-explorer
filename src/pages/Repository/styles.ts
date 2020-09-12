import styled from 'styled-components';

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 32px;

      strong {
        display: block;
        margin-bottom: 12px;
        font-size: 36px;
        line-height: 42px;
        color: #3d3d4d;
      }

      p {
        font-family: Roboto;
        font-size: 20px;
        line-height: 23px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;
    list-style-type: none;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        font-size: 36px;
        line-height: 42px;
        color: #3d3d4d;
      }

      span {
        display: block;
        font-size: 20px;
        line-height: 23px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.main`
  margin-top: 80px;

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
`;
