import React from 'react';

import { Link } from 'react-router-dom';
import { Header } from './styles';

import Logo from '../../assets/logo.svg';

const HeaderPage: React.FC = ({ children }) => {
  return (
    <>
      <Header>
        <Link to="/">
          <img src={Logo} alt="github explorer" />
        </Link>
        {children}
      </Header>
    </>
  );
};

export default HeaderPage;
