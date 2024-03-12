// Third party
import PropTypes from "prop-types";
// Styles
import styles from "./Form.module.css";

function Form({ children, className, ...restProps }) {
  return (
    <form
      action="#"
      className={styles[className] ?? className}
      onSubmit={(event) => event.preventDefault()}
      {...restProps}
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  restProps: PropTypes.object,
};

export default Form;
