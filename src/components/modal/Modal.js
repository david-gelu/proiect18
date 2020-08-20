import React from 'react';
import ReactDOM from 'react-dom';

import Pokemon from '../pokemon/Pokemon';
import { ModalWrapper, ModalContent, Button } from './Modal.style'

const Modal = ({ isShowing, hide, name, url, onePokemon, setCurrentPokemon }) => isShowing ? ReactDOM.createPortal(
  <>
    <ModalWrapper aria-modal aria-hidden tabIndex={url} role="dialog">
      <ModalContent>
        <Pokemon name={name} url={url} onePokemon={onePokemon} setCurrentPokemon={setCurrentPokemon} />
        <Button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times; Close &times;</span>
        </Button>
      </ModalContent>
    </ModalWrapper>
  </>, document.body
) : null;
export default Modal;