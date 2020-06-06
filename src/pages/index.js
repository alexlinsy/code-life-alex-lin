import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';

const Home = () => (
  <div>
    <Helmet title="Code Life of Alex Lin" />
    <Navbar />
    Hello World
  </div>
);

export default Home;
