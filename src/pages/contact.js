import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import './style.scss';

const contact = () => {
  return (
    <Layout>
      <Container>
        <div className="contact">
          <div className="contact__title">
            Contact me for web projects, front end positions, coffee time tech talk...
          </div>
          <div className="contact__method">
            <a
              href="https://github.com/alexlinsy"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Github Contact"
            >
              <i className="fa fa-github" />
            </a>
            <a
              href="mailto:shaoyilin@dal.ca"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Email"
            >
              <i className="fa fa-envelope" />
            </a>
            <a
              href="tel: +1(902)-989-2208"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Mobile Contact"
            >
              <i className="fa fa-mobile" />
            </a>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default contact;
