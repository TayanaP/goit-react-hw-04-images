import { useEffect } from "react";
import PropTypes from 'prop-types';
import {Overlay, ModalWindow} from 'components/Modal/Modal.styled'

  export const Modal = ({ onClose, src, alt }) => {
    const handleClick = event => {
      if (event.target === event.currentTarget) {
        onClose();
      }
  };

    useEffect (() => {
      const handleClose= event => {
        if (event.code === 'Escape') {
          onClose();
        }
      };

        window.addEventListener('keydown', handleClose);
        return () => {
        window.removeEventListener('keydown', handleClose);
        }
      }, [onClose]);

        return(
            <Overlay onClick={handleClick}>
                <ModalWindow>
                    <img src={src} alt={alt} />
                </ModalWindow>
            </Overlay>
        );
    };


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  };