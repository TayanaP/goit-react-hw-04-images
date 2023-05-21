import { Component } from "react";
import PropTypes from 'prop-types';
import {Overlay, ModalWindow} from 'components/Modal/Modal.styled'


export class Modal extends Component {
   
    componentDidMount() {
        window.addEventListener('keydown', this.handleClose);
      }

      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleClose);
      }

      handleClose= event => {
        if (event.code === 'Escape') {
          this.props.onClose();
        }
      };

      handleClick = event => {
        if (event.target === event.currentTarget) {
          this.props.onClose();
        }
    }

    render() {
        return(
            <Overlay onClick={this.handleClick}>
                <ModalWindow>
                    <img src={this.props.src} alt={this.props.alt} />
                </ModalWindow>
            </Overlay>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };