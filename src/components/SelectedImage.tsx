import React from 'react';
import Typography from '@mui/material/Typography';
import { Image } from '../features/imageSlice';

interface SelectedImageProps {
  image: Image | null;
}

const SelectedImage: React.FC<SelectedImageProps> = ({ image }) => {
  return (
    <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}>
      {image ? (
        <div>
             <Typography variant="h4" align="center" >
            {image.author}
          </Typography>
          <img src={image.url} alt={`Author: ${image.author}`} style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
        </div>
      ) : (
        <Typography variant="body1" align="center">
          No image selected
        </Typography>
      )}
    </div>
  );
};

export default SelectedImage;
