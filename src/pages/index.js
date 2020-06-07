import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const Home = () => (
  <>
    <Helmet title="Code Life of Alex Lin" />
    <Layout>
      <div style={{ background: '#f2f2f2', height: 800 }}>Hello</div>
    </Layout>
  </>
);

export default Home;
