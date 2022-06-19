import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name : 'ui',
    initialState : {toggleCourseDetail : 1},
    reducers : {
        toggleCourseHandler(state,action) {
            // const num = action.payload;
        // console.log(num);
        // console.log(num)
            state.toggleCourseDetail = action.payload;
        }
    }
})

export  const uiActions = uiSlice.actions;
export default uiSlice;