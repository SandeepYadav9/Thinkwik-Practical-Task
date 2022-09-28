import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './ui-Slice';

 const store = configureStore({
  reducer: { ui: uiSlice.reducer},
})
export default store;