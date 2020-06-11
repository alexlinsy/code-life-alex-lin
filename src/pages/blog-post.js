import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import BlogContent from '../components/BlogContent';

const BlogPost = ({ data }) => {
  const {
    posts: {
      date,
      postNumber,
      color,
      image,
      title,
      description: { description },
    },
  } = data;

  return (
    <Layout>
      <BlogContent
        image={image}
        title={title}
        description={description}
        color={color}
        date={date}
        postNumber={postNumber}
      />
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query MyQuery($slug: String) {
    posts: contentfulPosts(slug: { eq: $slug }) {
      date
      postNumber
      color
      image {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      title
      description {
        description
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      date: PropTypes.string,
      postNumber: PropTypes.number,
      color: PropTypes.string,
      image: PropTypes.object,
      title: PropTypes.string,
      description: PropTypes.object,
    }),
  }),
};
