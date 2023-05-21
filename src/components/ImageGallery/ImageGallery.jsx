import PropTypes from 'prop-types';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'
import {Gallery} from 'components/ImageGallery/ImageGallery.styled'


export function ImageGallery ({images, onOpen}) {
    return (
        <Gallery>
             {images.map((image) => (
        <ImageGalleryItem
         key={image.id}
         src={image.webformatURL}
         alt={image.alt}
         onOpen={() => onOpen(image.largeImageURL)}
          />
      ))}
        </Gallery>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ),
  };