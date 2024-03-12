// Third party
import PropTypes from "prop-types";
// Styles
import styles from "./Button.module.css";

function Button({ children, className, ...restProps }) {
  return (
    <button className={styles[className] ?? className} {...restProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  restProps: PropTypes.object,
};

export default Button;
