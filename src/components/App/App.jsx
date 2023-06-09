import { useState, useEffect } from 'react';
import { fetchImages } from 'components/API/api';
import { Searchbar} from 'components/Searchbar/Searchbar';
import { ImageGallery} from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import {ErrorMessage} from 'components/ErrorMessage/ErrorMessage'

export const App = () => {
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', alt: '' });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!name) return;
      setIsLoading(true);

      fetchImages(name, page)
        .then(({ totalHits, images }) => {
          setImages((prevImages) => [...prevImages, ...images]);
          setShowLoadMore(page < Math.ceil(totalHits / 12));
        })
        .catch((error) => {
          handleError(error.message)
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
  }, [name, page]);

  const handleError = message => {
    setError(message);
  }

  const handleFormSubmit = (name) => {
    setName(name);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onOpen = (src, alt) => {
    setModalImage({ src, alt });
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      <ImageGallery images={images} onOpen={onOpen} />
      {showLoadMore && <Button onClick={handleLoadMore}>Load more</Button>}
      <Loader visible={isLoading} />
      {error && <ErrorMessage error={error} />}
      {showModal && <Modal src={modalImage.src} alt={modalImage.alt} onClose={onClose} />}
    </div>
  );
};

