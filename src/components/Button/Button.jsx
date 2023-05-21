import PropTypes from 'prop-types';
import {ButtonLoad} from 'components/Button/Button.styled'

export function Button ({onClick }) {
    return (
      <ButtonLoad type="button" onClick={onClick}>
        Load more
      </ButtonLoad>
    );
  };
  
  Button.propTypes = {
    LoadMore: PropTypes.func,
  };