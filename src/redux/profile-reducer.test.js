import profileReducer, {addPostCreator,deletePostCreator} from "./profile-reducer"
import ReactDOM from 'react-dom';
import App from '../App'
import React from 'react'
let state = {
    postsData: [
        {id: 1, message: "Я на Бали"},
        {id: 2, message: "Я на Багамах"},
        {id: 3, message: "Я на Гаваях"},
        {id: 4, message: "Я в Майами"},
        {id: 5, message: "Я в Амстердаме"}
]}
it('length of posts should be incremented',()=>{
    //1.test data
    let action = addPostCreator('it-kamasutra.com')

    //2.action
    let newState = profileReducer(state,action)
    //3.expectations
    expect(newState.postsData.length).toBe(6)})

it('message of new message should be correct',()=>{
        //1.test data
        let action = addPostCreator('it-kamasutra.com')
        //2.action
        let newState = profileReducer(state,action)
        //3.expectations
        expect(newState.postsData[5].message).toBe('it-kamasutra.com')})

it('length of posts after deleting should be decrement',()=>{
            //1.test data
            let action = deletePostCreator(1)
            //2.action
            let newState = profileReducer(state,action)
            //3.expectations

           expect(newState.postsData.length).toBe(4)})
it('deleting if incorrect id',()=>{
            //1.test data
            let action = deletePostCreator(19999)
            //2.action
            let newState = profileReducer(state,action)
            //3.expectations

           expect(newState.postsData.length).toBe(5)})