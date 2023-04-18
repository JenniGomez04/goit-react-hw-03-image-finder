import React from 'react';
import PropTypes from 'prop-types';
import { Li } from './ImageGalleryItem.styled';

function ImageGalleryItem({ image, onImageClick }) {
  return (
    <Li className="gallery-item">
      <img src={image.webformatURL} alt={image.tags} onClick={() => onImageClick(image.largeImageURL)} />
    </Li>
  );
}


ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired, //un número identificador único para la imagen.
    webformatURL: PropTypes.string.isRequired, //una cadena que representa la URL de la imagen con un tamaño de 640 píxeles de ancho.
    tags: PropTypes.string.isRequired, //una cadena que representa las etiquetas asociadas con la imagen.
    largeImageURL: PropTypes.string.isRequired //una cadena que representa la URL de la imagen a tamaño completo.
  }).isRequired,
  onImageClick: PropTypes.func.isRequired
};

export default ImageGalleryItem;



/*const ImageGallery = ({ smallImageUrl, onClick }) => (
  <li className="gallery-item">
    <img src={smallImageUrl} alt="" className="gallery-image" onClick={onClick} />
  </li>
);

export default ImageGallery;*/


/*const ImageGallery = ({ images }) => (
  <ul className="gallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;*/


