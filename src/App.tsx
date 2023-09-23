import './App.css'
import React from 'react';
import Auth from './components/auth/Auth'; 
import {Routes , Route , BrowserRouter as Router   } from 'react-router-dom' ;
import Header from './components/Header';
const App : React.FC  = () =>{
  /*
        / => {news}(
          sidebar , createPost , posts
          choose form sidebar static (popular groups , friendships , chat , mygroups )
        )
        /group/:id => {group}(
          sidebar , createPost , posts , users
          choose from sidebar dynamic {based on param} (members , posts , users , groupInfo )
        )
        /relations?status=value => {relations} (
          sidebar , users(value)
          choose from sidebar dynamic {based on param} (blocked , friends , blockedme , recieved , sent )
        )
        /chat => {chat}(
          sidebar , users({messaged}) // edit the back to return them
          chatbox/:id
        )
        /profile => {profile}(
          sidebar , profileHeader , posts
        )
        /groups?type=['public' , 'mine' ] (
          sidebar , groups
        )
        /profile/edit =>{profile}(
          sidebar , editProfile 
        )
        /post/:id => (post){
          post , comments 
        }
        /post/edit/:id
        
        /search?query= => {search}(
          sidebar , 
        )
        
        posts component(type , id ) => {
          type: ['news'   ,'group' , 'user' ]
          id  : [undefined, number , number ]

          posts contain Post component (title , body , reaction count )
        }
        users component : query ?status= =>  ['blocked' ,'friends' ,'blockedme' ,'recieved' , 'sent' , 'groupMembers?id=3&status=blocked|members' ]
  */
  return (
    <>
      <Header></Header>
      
      <Routes>
        <Route path='/login' element={<Auth/>}/>

      </Routes>

    </>
  )
}

export default App
