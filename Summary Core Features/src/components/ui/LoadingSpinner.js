import classes from './LoadingSpinner.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const portalAnchor = document.getElementById('modals');

const Spinner = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.spinner}>
        <div className={classes['lds-ring']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <Fragment>{ReactDOM.createPortal(<Spinner />, portalAnchor)}</Fragment>
  );
};

export default LoadingSpinner;
