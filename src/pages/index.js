import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import './style.scss';

const Home = () => (
  <>
    <Helmet title="Code Life of Alex Lin">
      <meta property="og:title" content="Code life of Alex Lin" />
      <meta
        property="og:image"
        content="https://www.alexlinsy.com/static/be9daeefaeddf2494484f9b6f46ef76b/ee604/header.png"
      />
      <meta property="og:description" content="Personal blog and website" />
      <meta property="og:url" content="https://www.alexlinsy.com/" />
    </Helmet>
    <Layout>
      <div style={{ background: '#f2f2f2', height: 'auto' }}>
        <div className="home">
          <h1 className="home__title">POSTS</h1>
          <BlogCard />
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
