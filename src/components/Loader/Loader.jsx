import PropTypes from 'prop-types';
import {Circles} from 'react-loader-spinner';

export function Loader ({visible}) {
    return (
        <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{margin: '0 auto'}}
        visible={visible}
      />
    )
}

Loader.propTypes = {
    visible: PropTypes.bool.isRequired,
  };