import PropTypes from 'prop-types';
import {GalleryItem, GalleryImage} from 'components/ImageGalleryItem/ImageGalleryItem.styled'

export function ImageGalleryItem ({  src, alt, onOpen }) {
    return (
        <GalleryItem>
            <GalleryImage 
               src={src} 
               alt={alt}
               onClick = {onOpen}/>
        </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      onOpen: PropTypes.func.isRequired,
}

