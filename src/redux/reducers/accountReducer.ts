import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [],
  currentUser: null,
  loading: true,
  data: [],
  error: false,
  messageToken: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount(state, action) {
      let Account = state.accounts.find((account) => account?.id === action.payload.id);
      if (!Account) {
        state.accounts.push(action?.payload);
      }
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setMessageToken(state, action) {
      state.messageToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.currentUser = action.payload;
      }
      state.error = false;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.loading = false;
      console.log('error...', action.payload);
      state.error = action.payload;
    });
  },
});
const accountReducer = accountSlice.reducer;

export const { addAccount, setCurrentUser, setMessageToken } = accountSlice.actions;

export default accountReducer;
