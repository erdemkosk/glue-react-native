// colorModeSlice.js dosyası
import { createSlice } from '@reduxjs/toolkit';
import { useColorScheme } from "@/components/useColorScheme";

const initialState = {
  colorMode: 'dark', // Varsayılan renk modu
};

const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    changeColorMode: (state) => {
      state.colorMode = state.colorMode === 'light' ? 'dark' : 'light'; // Toggle the color mode
    },
  },
});

export const { changeColorMode } = colorModeSlice.actions;

export default colorModeSlice.reducer;
