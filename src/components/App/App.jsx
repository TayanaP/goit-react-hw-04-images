import { useState, useEffect } from 'react';
import { fetchImages } from 'components/API/api';
import { Searchbar} from 'components/Searchbar/Searchbar';
import { ImageGallery} from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

// export class App extends Component {
//   state = {
//     name: '',
//     images: [],
//     page: 1,
//     isLoading: false,
//     showLoadMore: false,
//     showModal: false,
//     error: false,
//   };

//   componentDidUpdate(_, prevState) {
//     const { name, page } = this.state;
//     if (prevState.name !== name || prevState.page !== page) {
//       this.setState({ 
//         isLoading: true, 
//         });
//       fetchImages(name, page)
//         .then(({ totalHits, images }) => {
//           console.log(images ); 
//           this.setState(state => ({
//             images: [...state.images, ...images ],
//             showLoadMore: page < Math.ceil(totalHits/ 12),
//           }));
//         })
//         .catch(() => this.setState({ error: true }))
//         .finally(() => this.setState({ isLoading: false }));
       
//     }
//   }

//   handleFormSubmit = name => {
//     console.log(name)
//     this.setState({ name, page: 1, images: []});
//   };

//   handleLoadMore = () => {
//     this.setState(state => ({ page: state.page + 1 }));
//   };

//   onOpen = (src, alt) => {
//     this.setState({ showModal: { src, alt } });
//   };

//   onClose = () => {
//     this.setState({ showModal: false });
//   };

//   render() {
//     const { showModal, showLoadMore, isLoading, images } = this.state;
//     return (
//       <div>
//         <Searchbar handleFormSubmit={this.handleFormSubmit} />

//         <ImageGallery images={images} onOpen={this.onOpen} />

//         {showLoadMore && <Button onClick={this.handleLoadMore}>Load more</Button>}

//         <Loader visible={isLoading} />

//         {showModal && (
//           <Modal
//             src={showModal.src}
//             alt={showModal.alt}
//             onOpen = {this.onOpen}
//             onClose={this.onClose}
//           />
//         )}
//       </div>
//     );
//   }
// }

export const App = () => {
  const [name, setName] = useState('');
  const [prevName, setPrevName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', alt: '' });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (name !== '' && (page === 1 || (name !== prevName || page !== prevPage))) {
      setIsLoading(true);
      fetchImages(name, page)
        .then(({ totalHits, images }) => {
          console.log(images);
          setImages((prevImages) => [...prevImages, ...images]);
          setShowLoadMore(page < Math.ceil(totalHits / 12));
        })
        .catch((error) => {
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    setPrevName(name);
    setPrevPage(page);
  }, [name, page]);

  const handleFormSubmit = (name) => {
    console.log(name);
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
      {showModal && <Modal src={modalImage.src} alt={modalImage.alt} onClose={onClose} />}
    </div>
  );
};