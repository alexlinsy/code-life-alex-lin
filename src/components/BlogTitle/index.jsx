import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import PostDate from '../PostDate';
import './style.scss';

const BlogTitle = ({ id, color, index, date, title, shortDescription, slug }) => (
  <div className="blogCard__card" key={id}>
    <div className="blogCard__postTitle" style={{ border: `2px solid ${color}` }}>
      <PostDate date={date} index={index} color={color} borderCheck />
      <h1 className="blogCard__title">{title}</h1>
    </div>
    <div className="blogCard__short-description">
      {shortDescription}
      <Link to={`/post/${slug}`}>
        <div className="blogCard__read-more">
          Read Now <i className="fa fa-angle-right" aria-hidden="true" />
        </div>
      </Link>
    </div>
  </div>
);

BlogTitle.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string.isRequired,
  index: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string,
  slug: PropTypes.string,
};

export default BlogTitle;
