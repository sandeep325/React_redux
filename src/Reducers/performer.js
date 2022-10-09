// for tookkit method to create reducer

import {createReducer}  from '@reduxjs/toolkit'

const initialState = 0;

//=================== before toolkit create reducer=====================================

// export const changeTheNumber = (state=initialState,action) =>{

//     switch (action.type) {
//         case "INCREMENT": return state+action.payload;
//         case "DECREMENT": return state-action.payload;
//         default: return state;
//     }

// }


//================================== after toolkit create reducer ==================================


export default createReducer(initialState,(builder)=>{
       builder.addCase('INCREMENT',(state, action)=>{
        return state+action.payload

     })
     builder.addCase('DECREMENT',(state, action)=>{
        return state-action.payload

     })

}) 