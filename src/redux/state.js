import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import navigationReducer from './navigation-reducer';
let store = {
    _state: {
        profilePage: {
        postsData: [
            {id: 1, message: "Я на Бали"},
            {id: 2, message: "Я на Багамах"},
            {id: 3, message: "Я на Гаваях"},
            {id: 4, message: "Я в Майами"},
            {id: 5, message: "Я в Амстердаме"}
        ],
        newPostText: 'Imma ride'
        },
        dialogsPage: {
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
        },
        navigation: {
            
        }
    },
    _rerenderEntireTree() {
        return null
    },
    get state() {
        return this._state
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.navigation = navigationReducer(this._state.navigation,action)
        this._rerenderEntireTree(this._state)
          },
    subscribe (observer) {
        this._rerenderEntireTree = observer;//наблюдатель
    }
}


window.store = store
export default store;
