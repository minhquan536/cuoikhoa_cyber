import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    login: {
        taiKhoan: "",
    },
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        loginSuccess: (state, action: {payload: {taiKhoan: string}}) => {
            state.login.taiKhoan = action.payload.taiKhoan;
        },
        setLogin: (state, action: {payload: {taiKhoan : string}}) => {
            state.login.taiKhoan = action.payload.taiKhoan
        }
    }
});

export const userReducer = userSlice.reducer;
export const {loginSuccess, setLogin} = userSlice.actions