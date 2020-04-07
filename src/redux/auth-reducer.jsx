import React from "react";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: '6986',
    email: 'ilia.petrowski@gmail.com',
    login: 'gonzo',
    isAuth: false,


};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true,

            };

        default:
            return state;
    }
};




export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export default authReducer;