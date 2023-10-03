import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialUserState = {
  userList: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@april.biz",
      phone: "010-692-6593 x09125",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@april.biz",
      phone: "1-463-123-4447",
    },
  ] as User[],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const userActions = userSlice.actions;

export default userSlice;
