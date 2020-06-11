import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import PostDate from '../PostDate';

import './style.scss';

const BlogContent = ({ image, title, description, color, date, postNumber }) => {
  return (
    <div className="blogContent">
      <div className="blogContent__image">
        <Img fluid={image.fluid} />
      </div>
      <div className="blogContent__title" style={{ borderBottom: `2px solid ${color}` }}>
        <h2>{title}</h2>
        <div className="blogContent__date">
          <PostDate date={date} index={postNumber} color={color} borderCheck={false} />
        </div>
      </div>
      <div className="blogContent__content">
        <ReactMarkdown source={description} />
      </div>
    </div>
  );
};

export default BlogContent;

BlogContent.propTypes = {
  date: PropTypes.string,
  postNumber: PropTypes.number,
  color: PropTypes.string,
  image: PropTypes.shape({
    fluid: PropTypes.object,
  }),
  title: PropTypes.string,
  description: PropTypes.string,
};
