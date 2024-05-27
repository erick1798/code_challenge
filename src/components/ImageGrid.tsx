import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, selectImage, clearSelectedImage, Image } from '../features/imageSlice';
import { RootState } from '../store/store';
import styled from 'styled-components';
import ImageItem from './ImageItem';
import SelectedImage from './SelectedImage';
import UploadImage from './UploadImage';
import { Button } from '@mui/material';

const Grid = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  padding: 20px; 
  flex: 1; 
`;

const ImageList = styled(Section)`
  background-color: orange;
  align-items: center; 
`;

const SelectedImageContainer = styled(Section)`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadImageContainer = styled(Section)`
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const ImageGrid: React.FC = () => {
  const images = useSelector((state: RootState) => state.images.images);
  const selectedImage = useSelector((state: RootState) => state.images.selectedImage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages() as any);
  }, [dispatch]);

  const handleImageClick = (image: Image) => {
    dispatch(selectImage(image));
  };

  const handleClearSelectedImage = () => {
    dispatch(clearSelectedImage());
  };

  return (
    <Grid>
      <ImageList>
        {images.map((image) => (
          <ImageItem key={image.id} image={image} onClick={() => handleImageClick(image)} />
        ))}
      </ImageList>
      <SelectedImageContainer>
        <SelectedImage image={selectedImage} />
        {selectedImage && (
          <ButtonContainer>
            <Button variant="contained" onClick={handleClearSelectedImage}>Clear</Button> 
          </ButtonContainer>
        )}
      </SelectedImageContainer>
      <UploadImageContainer>
        <UploadImage />
      </UploadImageContainer>
    </Grid>
  );
};

export default ImageGrid;








