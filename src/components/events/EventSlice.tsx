import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventState {
  id: String,
  title: String,
  start: String,
  end: String,
  detail: String,
  backgroundColor: String,
  borderColor: String
}

export const initialState = []

//createSlice:reducerとactionsをまとめる
const eventSlice = createSlice({
  name: 'event',
  initialState: initialState as EventState[],
  reducers: {
    //actions(){fn()}
    createEventData: (state, action: PayloadAction<EventState>) => {
      console.log('createEventData is called');
      state.push(action.payload);
    },
    deleteEventData: (state, action: PayloadAction<EventState["id"]>) => {
      let result;
      console.log('deleteEventData is called');
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
export const { createEventData, deleteEventData } = eventSlice.actions
export const eventReducer = eventSlice.reducer
