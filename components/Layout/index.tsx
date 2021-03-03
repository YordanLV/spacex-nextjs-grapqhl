import React from 'react';
import styled from 'styled-components';

interface LayoutTypes {
  children: React.ReactNode
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem;
  img{
    height: 2rem;
  }
`;

const Footer = styled.footer`
  text-align: center;
`;

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <>
      <Header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png" />
      </Header>
      {children}
      <Footer>
        <span>Copyright &copy; {new Date().getFullYear()}</span>
      </Footer>
    </>
  )
}

export default Layout;
