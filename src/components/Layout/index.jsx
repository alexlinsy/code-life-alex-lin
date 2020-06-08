import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';
import { PortfolioProvider } from '../../context/context';
import { footerData } from '../../mock/data';
import './style.scss';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    setFooter({ ...footerData });
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <PortfolioProvider value={{ footer }}>
        <Footer />
      </PortfolioProvider>
    </>
  );
};

export default Layout;
