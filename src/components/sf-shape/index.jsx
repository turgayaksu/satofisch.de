import PropTypes from 'prop-types';

export default function SfShape({ sfclass, img, duration, opacity }) {
  return (
    <div className='sf-shape'>
      <div
        className={`sf-bg-image sf-animate ${sfclass}`}
        data-bg-image={img}
        style={{
          animationDuration: `${duration}`,
          opacity: `${opacity}`,
          backgroundImage: `url(${img})`
        }}
      ></div>
    </div>
  );
}

SfShape.defaultProps = {
  opacity: '1'
};

SfShape.propTypes = {
  sfclass: PropTypes.string,
  img: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  opacity: PropTypes.string
};
