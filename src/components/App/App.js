import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import MyLoader from '../Loader/Loader';
import { GalleryContainer, SearchbarContainer, ButtonContainer } from './App.styled';


const keyApi = '22814732-c072aba9b3863a4ff839d34a8';

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMoreButton, setShowMoreButton] = useState(false);
 // const [isLoadingImages, setIsLoadingImages] = useState(true);

  useEffect(() => {
    const fetchImages = () => {
      if (!searchQuery.trim()) {
        setImages([]);
        setShowMoreButton(false);
        return;
      }

      const url = `https://pixabay.com/api/?key=${keyApi}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

      setIsLoading(true);
      axios
        .get(url)
        .then((response) => {
          const { hits } = response.data;
          setImages((prevImages) => [...prevImages, ...hits]); // Concatenate new images to previous images
          setIsLoading(false);
          setShowMoreButton(hits.length === 12);
       //   setIsLoadingImages(false);
        })
        .catch((error) => console.log(error));
    };
  
    fetchImages();
  }, [searchQuery, page]);

  const openModal = (imageUrl) => {
    setShowModal(true);
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleSearchbarSubmit = (query) => {

    if (!query.trim()) {
      setSearchQuery('');
      return;
    }

    setSearchQuery(query);
    setPage(1);
    setImages([]);
    setShowMoreButton(false);
  };

  return (
    <>
      <SearchbarContainer>
        <Searchbar onSubmit={handleSearchbarSubmit} />
      </SearchbarContainer>
      <GalleryContainer>
        {images.map((image, index) => (
          <ImageGalleryItem key={image.id + '_' + index} image={image} onImageClick={openModal} />
        ))}
        {isLoading ? (
          <MyLoader />
        ) : (
          <ImageGallery images={images} onImageClick={openModal} />
        )}
        {showModal && <Modal imageUrl={selectedImage} closeModal={closeModal} />}
        </GalleryContainer>
        {showMoreButton && (
          <div>
          <ButtonContainer>
          <Button
            onClick={() => setPage(page + 1)}
            disabled={isLoading}
            showMoreButton={true}
          />
          </ButtonContainer>

        </div>
      )}
    </>
  );
}

export default App;


///////////////////////////////////////////////////////////////////////////////////

/*import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
//import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';



const keyApi = '22814732-c072aba9b3863a4ff839d34a8';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchQuery: '',
      page: 1,
      isLoading: false,
      showModal: false,
      selectedImage: null,
      error: null,
      showMoreButton: false,
    };
  }

  //Nueva busqueda (Actualización) de imagenes cada que search Query del componente cambie
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  // Carga imagenes del componente y se muestra en el interfaz de usuario
  componentDidMount() {
    this.fetchImages();
  }

  //consulta la Api de las imagenes y actualizar el estado de un componente
  fetchImages = () => {
    const { searchQuery, page } = this.state;

    if (!searchQuery.trim()) {  // Si no hay término de búsqueda, actualiza el estado de las imágenes a un array vacío
      this.setState({ images: [], showMoreButton: false });
      return;
    }
    
    const url = `https://pixabay.com/api/?key=${keyApi}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
    this.setState({ isLoading: true }); // Actualiza isLoading a true
    axios
      .get(url)
      .then((response) => {
        const { hits } = response.data;
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
          isLoading: false, // Actualiza isLoading a false cuando las imágenes han sido cargadas
          showMoreButton: hits.length === 12,
        }));
      })
      .catch((error) => console.log(error));
  };

  // Función para abrir la ventana modal
  openModal = (imageUrl) => {
    this.setState({ showModal: true, selectedImage: imageUrl });
  };

  // Función para cerrar la ventana modal
  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  handleSearchbarSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  // Extrae el valor de images lo que Permite el uso de la variable más adelante
  render() {
    const { images, showModal, selectedImage, isLoading, showMoreButton } = this.state;

    return (
      <div className = 'gallery-container'>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
          {/* Map sobre images para crear ImageGalleryItem por cada imagen *//*}
          {images.map((image, index) => (
        <ImageGalleryItem key={image.id + '_' + index} image={image} onImageClick={this.openModal} />
        ))}
        <ImageGallery images={images} onImageClick={this.openModal} />
        {showModal && <Modal imageUrl={selectedImage} closeModal={this.closeModal} />}
        {showMoreButton && <Button onClick={this.fetchImages} disabled={isLoading} showMoreButton={true} />}
      </div>
    );
  }
}


export default App;*/
