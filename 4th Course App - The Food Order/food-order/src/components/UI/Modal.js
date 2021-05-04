import classes from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = ({onHideCart}) => {
  return <div className={classes.backdrop} onClick={onHideCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalAnchor = document.getElementById('overlays');

const Modal = ({children, onHideCart}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart}/>, portalAnchor)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalAnchor)}
    </Fragment>
  );
};

export default Modal;
