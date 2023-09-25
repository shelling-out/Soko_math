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

          when choosing members-> 
            /group/:id/members?type='group'&status=['members','pending'] (blocked not provided by backend)
        )
        /relations?status=value&type='relation' => {relations} (
          sidebar , users(value)
          choose from sidebar dynamic {based on param} (blocked , friends , blockedme , recieved , sent )
        )
        /chat => {chat}(
          sidebar , users({messaged}) // edit the back to return them
          chatbox/:id
        )
        /profile/:id => {profile}(
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
        users component (
           ?type= [ 'relation' , 'group' ] 
           ?status= ['blocked' , 'friends' , 'blockedme' ,'recieved' , 'sent' ]
           
        )
        
        done:(components )
          Posts
          Users 
          Header
          Sidebar
          ProfileHeader
          CreatePost
          Groups

        todo:
          edit AuthorImage to be more abstract 
          
          Post(with_comments) or change SinglePost to show render comments if comment button clicked in the same page
          GroupHeader
          Search
          EditPost
          EditPorfile
          SinglePostEdit

        to learn:
        1. How to get image using fetch => https://stackoverflow.com/questions/46642960/authorization-header-in-img-src-link
        2. Authentication with RTK  

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
