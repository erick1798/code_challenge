import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Image {
  id: string;
  url: string;
  author:string;
}

interface ImageState {
  images: Image[];
  selectedImage: Image | null;
}

const initialState: ImageState = {
  images: [],
  selectedImage: null,
};

export const fetchImages = createAsyncThunk<Image[], void>(
  'images/fetchImages',
  async () => {
    const response = await axios.get('https://picsum.photos/v2/list?limit=30');
    return response.data.map((img: any) => ({
      id: img.id,
      url: `https://picsum.photos/id/${img.id}/200/300`,
      author: img.author,
      
    })) as Image[];
  }
);

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    selectImage: (state, action: PayloadAction<Image>) => {
      state.selectedImage = action.payload;
    },
    clearSelectedImage: (state) => {
      state.selectedImage = null;
    },
    addImage: (state, action: PayloadAction<Image>) => {
      state.images.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload;
    });
  },
});

export const { selectImage, clearSelectedImage, addImage } = imageSlice.actions;
export default imageSlice.reducer;


