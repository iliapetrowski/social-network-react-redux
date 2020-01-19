const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi, how are u?'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo!privet, kak delishki? privet, kak delishki?'},
        {id: 4, message: 'Yo privet, kak delishki?'},
        {id: 5, message: 'Yo, privet, kak delishki?'}
    ],
    newMessageBody: ''
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:

            let body = state.newMessageBody;
            state.messages.push({id: 92, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state
    }
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export default dialogsReducer;