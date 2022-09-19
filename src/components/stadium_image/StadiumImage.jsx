import React from 'react';
import PropTypes from 'prop-types';
import './stadium-image.css';

const StadiumImage = (props) => {
  const { src, alt } = props;

  return (
    <div className="image-feather">
      <img src={src} alt={alt} />
    </div>
  );
};

StadiumImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

StadiumImage.defaultProps = {
  src: '',
  alt: '',
};

export default StadiumImage;
