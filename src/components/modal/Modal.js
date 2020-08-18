import React from 'react';
import ReactDOM from 'react-dom';

import Pokemon from '../pokemon/Pokemon';

const Modal = ({ isShowing, hide, name, url, onePokemon }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={url} role="dialog">
      <div className="modal">
        <div className="modal-header">
        </div>
        <Pokemon name={name} url={url} onePokemon={onePokemon} />
        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times; Close &times;</span>
        </button>
      </div>
    </div>
  </>, document.body
) : null;
export default Modal;