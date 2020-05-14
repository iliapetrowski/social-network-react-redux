const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'I need of sleep or rest'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'do you like to drink vodka?'},
        {id: 4, message: 'I am so tired from my life...'},
        {id: 5, message: 'my name is Ivan'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;