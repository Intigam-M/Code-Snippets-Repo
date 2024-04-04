import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: {user: string} = {
  user: localStorage.getItem('user') || '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action:PayloadAction<{user:string}>) => {
        state.user = action.payload.user
        localStorage.setItem('user', action.payload.user)
    },
    logout: (state) => {
        state.user = ''
        localStorage.removeItem('user')
  }
    }
})

export const { login, logout } = authSlice.actions



export default authSlice.reducer