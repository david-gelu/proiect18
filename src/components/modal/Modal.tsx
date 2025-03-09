import Pokemon from '../pokemon/Pokemon';
import { ModalWrapper, ModalContent, Button } from './Modal.style';
import ReactDOM from 'react-dom';

interface ModalProps {
  isShowing: boolean;
  hide: () => void;
  name: string;
  url: string;
  setCurrentPokemon: (pokemon: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isShowing, hide, name, url, setCurrentPokemon }) => isShowing ? ReactDOM.createPortal(
  <>
    <ModalWrapper aria-modal aria-hidden tabIndex={0} role="dialog">
      <ModalContent>
        <Pokemon url={url} />
        <Button className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times; Close &times;</span>
        </Button>
      </ModalContent>
    </ModalWrapper>
  </>, document.body
) : null;
export default Modal;