// React
import { forwardRef } from "react";
// Third party
import PropTypes from "prop-types";
// Styles
import styles from "./Dialog.module.css";

const Dialog = forwardRef((props, ref) => (
  <dialog className={styles[props.className] ?? props.className} ref={ref}>
    {props.children}
  </dialog>
));
Dialog.displayName = "Dialog";

Dialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.object,
  ref: PropTypes.object,
};

export default Dialog;
