import React from 'react';
import styled from 'styled-components';
import { Image } from '../features/imageSlice';

interface ImageItemProps {
  image: Image;
  onClick: () => void;
}

const Container = styled.div`
  cursor: pointer;
  margin: 10px;
  max-width: calc(100% - 20px);
`;

const ImageElement = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ImageItem: React.FC<ImageItemProps> = ({ image, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ImageElement src={image.url} alt={image.id} />
    </Container>
  );
};

export default ImageItem;






