import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
      clearNews: (state) => {
        state.news = []
      },
    },

export const {clearNews} = newsSlice.actions

export default newsSlice.reducer