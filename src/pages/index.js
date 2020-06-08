import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import './style.scss';

const Home = () => (
  <>
    <Helmet title="Code Life of Alex Lin" />
    <Layout>
      <div style={{ background: '#f2f2f2', height: 800 }}>
        <div className="home">
          <h1 className="home__title">POSTS</h1>
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
