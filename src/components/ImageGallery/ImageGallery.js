import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGallery/ImageGallery';
import { Li } from './ImageGallery.styled';



function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images && images.map((image) => (
        <Li className="gallery-item" key={image.id}>
          <ImageGalleryItem image={image} onImageClick={onImageClick} />
        </Li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;

/*import React from 'react';
import ImageGalleryItem from '../ImageGallery/ImageGallery';

const ImageGallery = ({ images, onClick }) => (
  <ul className="gallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        smallImageUrl={webformatURL}
        largeImageUrl={largeImageURL}
        onClick={() => onClick({ id, webformatURL, largeImageURL })}
      />
    ))}
  </ul>
);


export default ImageGallery;*/




