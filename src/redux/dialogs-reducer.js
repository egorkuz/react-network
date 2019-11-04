const SEND_MESSAGE = 'SEND-MESSAGE'
let initialDialogsReducer = {
        messagesData: 
        [
        {id: 1, text: "Привет, как дела",time: '8:21'},
        {id: 2, text: "Норм, что делаешь",time: '8:22'},
        {id: 3, text: "Ничего, а ты",time: '8:23'},
        {id: 4, text: "Тоже ничего",time: '8:24'},
    ],
        dialogsList:
    [
        {id: 1, name: "Дядя"},
        {id: 2, name: "Тетя"},
    ],
    newMessageText: 'Введите текст сообщения'
}
export const dialogsReducer = (state = initialDialogsReducer,action) => {
    switch (action.type) {
    case SEND_MESSAGE:
          let newMessageValue = {
              id: 12,
              text: action.newMessage,
              time: '4:20'
          }
          return({...state,
          messagesData: [...state.messagesData,newMessageValue],
          newMessageText: ''
          })
        default:
            return state;
      }
}
export const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE,newMessage})

export default dialogsReducer;