import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import './style.scss';

const BlogTitle = ({ id, color, index, date, title, shortDescription }) => (
  <div className="blogCard__card" key={id}>
    <div className="blogCard__postTitle" style={{ border: `1px solid ${color}` }}>
      <div className="blogCard__info" style={{ borderRight: `1px solid ${color}` }}>
        <span style={{ borderBottom: `1px solid ${color}`, color: `${color}` }}>
          Post {index + 1}
        </span>
        <span style={{ color: `${color}` }}>{format(date, 'MM yyyy')}</span>
      </div>
      <h1 className="blogCard__title">{title}</h1>
    </div>
    <div className="blogCard__short-description">
      {shortDescription}
      <div className="blogCard__read-more">Read Now -&gt</div>
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
};

export default BlogTitle;
