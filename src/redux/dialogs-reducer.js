const SEND_MESSAGE = 'SEND-MESSAGE'
let initialDialogsReducer = {
        messagesData: 
        [
        {id: 1, text: "Love",time: '4:20'},
        {id: 2, text: "Hate",time: '4:20'},
        {id: 3, text: "Uptown",time: '4:20'},
        {id: 4, text: "Shinin' like a diamond from an eagle to a pigeon",time: '4:20'},
        {id: 5, text: "Bree",time: '4:20'},
        {id: 6, text: "Love",time: '4:20'},
        {id: 7, text: "Hate",time: '4:20'},
        {id: 8, text: "Uptown",time: '4:20'},
        {id: 9, text: "Shinin' like a diamond from an eagle to a pigeon",time: '4:20'},
        {id: 10, text: "Bree",time: '4:20'}
    ],
        dialogsList:
    [
        {id: 1, name: "Lil Wayne"},
        {id: 2, name: "Rick Ross"},
        {id: 3, name: "Birdman"},
        {id: 4, name: "Drake"},
        {id: 5, name: "Dj Khaled"},
        {id: 6, name: "Snopp Dogg"},
        {id: 7, name: "Wiz Khalifa"},
        {id: 8, name: "Swae Lee"},
        {id: 9, name: "Slim Jxmmi"},
        {id: 10, name: "Rick Rubin"},
    
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