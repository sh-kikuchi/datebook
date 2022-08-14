import { configureStore } from "@reduxjs/toolkit"
import { initialState as countInitialState, countReducer } from '../components/count/countSlice'
import { initialState as expenseInitialState, expenseReducer } from '../components/expense/ExpenseSlice'
import { save, load } from 'redux-localstorage-simple'; //localStrage

export class RootState {
  count = countInitialState;
  expense = expenseInitialState;
}

//reducer
const reducer = {
  count: countReducer,
  expense: expenseReducer
}

//store
const store = configureStore({
  reducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
})

export default store;
