import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExpenseState {
  id: String,
  name: String,
  price: Number,
  date: String
}

export const initialState = [];

//createSlice:reducerとactionsをまとめる
const expenseSlice = createSlice({
  name: 'expense',
  initialState: initialState as ExpenseState[],
  reducers: {
    //actions(){fn()}
    createExpenseData: (state, action: PayloadAction<ExpenseState>) => {
      console.log('createExpenseData is called');
      state.push(action.payload);
    },
    deleteExpenseData: (state, action: PayloadAction<ExpenseState["id"]>) => {
      let result;
      console.log('deleteExpenseData is called');
      const deleteTargetArray = action.payload.split(','); //配列化
      deleteTargetArray.forEach((deleteId) => {
        result = state.filter(v => v.id !== deleteId);
        state = result;
      })
      return state;
    },
  }
});

//export(actions/reducer)
export const { createExpenseData, deleteExpenseData } = expenseSlice.actions
export const expenseReducer = expenseSlice.reducer
