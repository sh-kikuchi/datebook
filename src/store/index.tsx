import { configureStore } from "@reduxjs/toolkit"
import { initialState as eventInitialState, eventReducer } from '../components/events/EventSlice'
import { save, load } from 'redux-localstorage-simple'; //localStorage

export class RootState {
  event = eventInitialState;
}

//reducer
const reducer = {
  event: eventReducer,
}

//store
const store = configureStore({
  reducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
})

export default store;
