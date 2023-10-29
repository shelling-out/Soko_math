import './App.css'
import React from 'react';
import Home from './components/Home';
import Level from './components/Level';
import {Routes , Route , BrowserRouter as Router   } from 'react-router-dom' ;
const App : React.FC  = () =>{
  return (
    <>

        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/level/:id" element={<Level/>}> </Route>

        </Routes>
      
    </>
  )
}

export default App

/*  
        LEFT:
          -Images (uploading , post , groupPost)s
          -errors handling & error messages
          -Tags(for relations) not working 
          -Sidebar
          -Responsiveness
          -chat
          -Loading... (empty) (appeas when errors occur)
          -Types(write types)
          -clean code

        Routes
        ----
        / => {news}(
          sidebar , createPost , postslist
          choose form sidebar static (popular groups , friendships , chat , mygroups )
        )
        /relations?status=value&type='relation' => {relations} (
          sidebar , userslist(value)
          choose from sidebar dynamic {based on param} (blocked , friends , blockedme , recieved , sent )
        )
        /profile/:id => {profile}(
          sidebar , profileHeader , postslist
        )
        /group/:id => {group}(  remaining: groupInfo
          sidebar , createPost , postslist , userslist
          choose from sidebar dynamic {based on param} (members , posts , users , groupInfo )

          when choosing members-> 
            /group/:id/members?type='group'&status=['members','pending'] (blocked not provided by backend)
        )
        /profile/edit =>{profile}(
          sidebar , editProfile 
        )
        /chat => {chat}(
          sidebar , userslist({messaged}) // edit the back to return them
          chatbox/:id
        )
        /groups?type=['public' , 'mine' ] (
          sidebar , groupslist
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