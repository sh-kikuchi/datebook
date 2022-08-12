import { configureStore } from "@reduxjs/toolkit"
import { initialState as countInitialState, countReducer } from '../components/count/countSlice'
import { initialState as expenseInitialState, expenseReducer } from '../components/expense/ExpenseSlice'

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
  reducer
})

export default store;
