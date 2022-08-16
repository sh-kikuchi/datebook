import { configureStore } from "@reduxjs/toolkit"
import { initialState as countInitialState, countReducer } from '../components/count/countSlice'
import { initialState as expenseInitialState, expenseReducer } from '../components/expense/ExpenseSlice'
import { initialState as eventInitialState, eventReducer } from '../components/events/EventSlice'
import { save, load } from 'redux-localstorage-simple'; //localStorage

export class RootState {
  count = countInitialState;
  expense = expenseInitialState;
  event = eventInitialState;
}

//reducer
const reducer = {
  count: countReducer,
  expense: expenseReducer,
  event: eventReducer,
}

//store
const store = configureStore({
  reducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
})

export default store;
