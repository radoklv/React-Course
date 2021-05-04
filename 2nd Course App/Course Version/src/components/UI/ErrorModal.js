import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import React from 'react';

const ErrorModal = ({ title, message, onConfirm }) => {
  const Backdrop = ({ onConfirm }) => {
    return <div className={classes.backdrop} onClick={onConfirm}></div>;
  };

  const ModalOverlay = ({title, message, onConfirm}) => {
   return <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>{message}</div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>;
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )},
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm}/>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

ErrorModal.defaultProps = {
  title: 'Alert',
};

export default ErrorModal;
