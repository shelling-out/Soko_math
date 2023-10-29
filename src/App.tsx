import './App.css'
import React from 'react';
import Auth from './components/auth/Auth'; 
import {Routes , Route , BrowserRouter as Router   } from 'react-router-dom' ;
import Header from './components/util/Header';
import Sidebar from './components/util/Sidebar';
import News from './components/News';
import Group from './components/Group';
import Relations from './components/Relations';
import Profile from './components/Profile';
import Groups from './components/Groups';
import SinglePost from './components/util/SinglePost';
import EditPostForm from './components/util/EditPostForm';
import EditProfile from './components/util/EditProfile';
import Logout from './components/util/Logout';
import Search from './components/Search' ;
import EditCommentForm from './components/util/EditCommentForm';
const App : React.FC  = () =>{

  return (
    <>
      <Header></Header>
      <div className='container'>
        <div className="container-col">
            <Sidebar></Sidebar>
        </div>
        <div className="container-col">
            <Routes>
              <Route path="/" element={<News></News>}/>
              <Route path="/result" element={<Search/>} />
              <Route path='/login' element={<Auth/>} />
              <Route path='/group/:groupId/*' element={<Group/>}/>
              <Route path='/relations' element={<Relations/>} />
              <Route path="/profile">
                <Route index  element={<Profile />} ></Route>
                <Route path=":id" element={<Profile/>} />
                <Route path="edit" element={<EditProfile/>}/>
              </Route>
              <Route path="/groups" element={<Groups/> } />
              <Route path='/post/:postId' >
                  <Route index element={<SinglePost postId={null} type={'news'} />} /> 
                  {/* edit this singlePostPage -> cz we need to add comments */}
                  <Route path='edit' element={<EditPostForm type={'news'}/>} />
              </Route>
              <Route path="/comment">
                  <Route path="edit/:commentId" element={<EditCommentForm />} ></Route>
              </Route>
              <Route path="/logout" element={<Logout></Logout>}></Route>
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App

/*  
        LEFT:
          -sidebar re-render 
          -likes trigger
          -errors handling & error messages
          -chat
          -Members(modifyRole) & Accepting Join Requests
          -Images
          -Show & hide comments
          -Tags(for relations) not working 
          -Types(write types)
          -Loading... (empty) 
          -Responsiveness
          -SVGs
          

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