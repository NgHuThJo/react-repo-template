// Third party
import PropTypes from "prop-types";
// Styles
import styles from "./Navigation.module.css";

function Navigation({ children, className, ...restProps }) {
  return (
    <nav className={styles[className]} {...restProps}>
      {children}
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  restProps: PropTypes.object,
};

export default Navigation;
