import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, height, style, ...props }) => {
    const customStyle = {
        width: width || 'auto',
        height: height || 'auto',
        ...style,
    };

    return <img src={src} alt={alt} style={customStyle} {...props} />;
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
};

Image.defaultProps = {
    width: 'auto',
    height: 'auto',
    style: {},
};

export default Image;