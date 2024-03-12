// Third party
import PropTypes from "prop-types";
// Styles
import styles from "./List.module.css";

function List({ children, className, ...restProps }) {
  return (
    <ul className={styles[className] ?? className} {...restProps}>
      {children}
    </ul>
  );
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  restProps: PropTypes.object,
};

export default List;
