import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#a8a8b3')};
    }

    strong {
      margin-left: 4px;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
