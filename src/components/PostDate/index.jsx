import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import './style.scss';

const PostDate = ({ date, index, color, borderCheck }) => (
  <div
    className="blogCard__info"
    style={borderCheck ? { borderRight: `2px solid ${color}` } : { border: `2px solid ${color}` }}
  >
    <span style={{ borderBottom: `2px solid ${color}`, color: `${color}` }}>Post {index}</span>
    <span style={{ color: `${color}` }}>{format(new Date(date), 'MMM yyyy')}</span>
  </div>
);

export default PostDate;

PostDate.propTypes = {
  date: PropTypes.string,
  index: PropTypes.number,
  color: PropTypes.string,
  borderCheck: PropTypes.bool,
};
