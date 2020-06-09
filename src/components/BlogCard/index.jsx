import React from 'react';
import './style.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BlogTitle from '../BlogTitle';

const query = graphql`
  {
    allContentfulPosts {
      nodes {
        id
        title
        shortDescription
        color
        format
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

const BlogCard = () => {
  const data = useStaticQuery(query);
  const {
    allContentfulPosts: { nodes },
  } = data;

  const posts = nodes.map((post, index) => (
    <>
      {post.format === 'right-left' ? (
        <div className="blogCard">
          <div className="blogCard__image">
            <Img fluid={post.image.fluid} />
          </div>
          <BlogTitle
            id={post.id}
            color={post.color}
            index={index}
            date={post.date}
            title={post.title}
            shortDescription={post.shortDescription}
          />
        </div>
      ) : (
        <div className="blogCard">
          <BlogTitle
            id={post.id}
            color={post.color}
            index={index}
            date={post.date}
            title={post.title}
            shortDescription={post.shortDescription}
          />
          <div className="blogCard__image">
            <Img fluid={post.image.fluid} />
          </div>
        </div>
      )}
    </>
  ));

  return <>{posts}</>;
};

export default BlogCard;
