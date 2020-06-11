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
        date
        postNumber
        shortDescription
        color
        format
        slug
        image {
          fluid(quality: 90) {
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

  const posts = nodes.map(post => (
    <div key={post.id}>
      {post.format === 'right-left' ? (
        <div className="blogCard">
          <div className="blogCard__image">
            <Img fluid={post.image.fluid} />
          </div>
          <BlogTitle
            id={post.id}
            color={post.color}
            index={post.postNumber}
            date={post.date}
            title={post.title}
            shortDescription={post.shortDescription}
            slug={post.slug}
          />
        </div>
      ) : (
        <div className="blogCard">
          <BlogTitle
            id={post.id}
            color={post.color}
            index={post.postNumber}
            date={post.date}
            title={post.title}
            shortDescription={post.shortDescription}
            slug={post.slug}
          />
          <div className="blogCard__image">
            <Img fluid={post.image.fluid} />
          </div>
        </div>
      )}
    </div>
  ));

  return <>{posts}</>;
};

export default BlogCard;
