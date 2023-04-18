import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import {Container} from './Loader.styled';

const MyLoader = () => {
  return (
    <Container>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </Container>
  );
};

export default MyLoader;
