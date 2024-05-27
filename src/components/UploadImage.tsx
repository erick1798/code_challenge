import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addImage, Image } from '../features/imageSlice';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Input from '@mui/material/Input';
import ButtonBase from '@mui/material/ButtonBase';

const UploadImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage: Image = {
          id: `${Date.now()}`,
          url: reader.result as string,
          author: 'local'
        };
        dispatch(addImage(newImage));
        setFile(null);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div>
      <Input
        id="upload-image"
        type="file"
        onChange={handleFileChange}
        style={{ position: 'absolute', top: '-9999px' }}
        inputProps={{ 'aria-label': 'Upload Image' }}
      />
      <ButtonBase
        component="label"
        htmlFor="upload-image"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload Image
        </Button>
      </ButtonBase>
    </div>
  );
};

export default UploadImage;


