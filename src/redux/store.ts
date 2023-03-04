import likeReducer from "./likeReducer";
import { configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { 
    productsLikeState: likeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch