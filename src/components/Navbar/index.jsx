import React from 'react';
import './style.scss';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

const query = graphql`
  {
    imageSharp(
      fluid: { src: { eq: "/static/be9daeefaeddf2494484f9b6f46ef76b/ee604/header.png" } }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

const Navbar = () => {
  const data = useStaticQuery(query);
  const {
    imageSharp: { fluid },
  } = data;

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <Link to="/" style={{ color: '#595959' }}>
          Programming Blog
        </Link>
      </div>
      <div className="navbar__icon">
        <Link to="/about-me">
          <Img fluid={fluid} />
        </Link>
      </div>
      <div className="navbar__links">
        <Link className="navbar__links__item" to="/about-me">
          About Me
        </Link>
        <Link className="navbar__links__item" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
