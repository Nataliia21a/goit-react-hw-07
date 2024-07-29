import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsList from "../contactsList.json";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: contactsList,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(items) {
        return {
          payload: {
            id: nanoid(),
            name: items.name,
            number: items.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
