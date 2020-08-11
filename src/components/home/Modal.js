import React from 'react';
import ReactDOM from 'react-dom';

import Pokemon from '../pokemon/Pokemon';
// import PokeImg from './PokemonImg';
const Modal = ({ isShowing, hide, url }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={url} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <h1>test 1</h1>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times; Close &times;</span>
          </button>
        </div>
        <Pokemon url={url} />
      </div>
    </div>
  </>, document.body
) : null;
export default Modal;