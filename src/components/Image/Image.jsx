// Third party
import PropTypes from "prop-types";
// Styles
import styles from "./Image.module.css";

function Image({ src, alt, className, ...restProps }) {
  return (
    <img
      className={styles[className] ?? className}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...restProps}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  restProps: PropTypes.object,
  src: PropTypes.string.isRequired,
};

export default Image;
