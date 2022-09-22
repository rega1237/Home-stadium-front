import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({
  children,
  title,
  setIsModalOpen,
  open,
}) => (
  <section className={`modal ${open ? '' : 'modal-hidden'}`}>
    <div className="modal-content">
      <div className="modal-header">
        <h5>
          {title}
        </h5>
        <button type="button" onClick={() => setIsModalOpen(false)}>
          <i className="fa fa-window-close" aria-hidden="true" />
        </button>
      </div>
      {children}
    </div>
  </section>
);

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
