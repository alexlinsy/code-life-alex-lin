import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import './style.scss';

const Home = () => (
  <>
    <Helmet title="Coding Life of Alex Lin">
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Coding Blog of Alex Lin" />
      <meta property="og:title" content="Coding Life of Alex Lin" />
      <meta
        property="og:image"
        content="https://www.alexlinsy.com/static/be9daeefaeddf2494484f9b6f46ef76b/ee604/header.png"
      />
      <meta property="og:description" content="Personal blog and website of Alex Lin" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:url" content="https://www.alexlinsy.com/" />
      <meta property="og:locale" content="en_US" />
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
