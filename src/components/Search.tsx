import React from 'react'
import { Route, Routes, useSearchParams , Link } from 'react-router-dom';
import { useGetSearchResultsQuery } from '../features/search/searchSlice';
import { useSendJoinRequestMutation } from '../features/groups/groupsSlice';

const Search = () => {
    const [searchParams ] = useSearchParams() ;
    let query = searchParams.get("q")
    const {data } = useGetSearchResultsQuery({query}) ;
    const [sendJoinRequest ]  = useSendJoinRequestMutation() ;

    const joinGroup =async  (e) =>{
        try{
            await sendJoinRequest({id:e.target.value}).unwrap() ; 
        }
        catch(err){
            console.log(err) ;
        }
    }
    
    let groups , users , posts;
    if(data?.groups){
        groups = <>
          
                {
                    data?.groups.map((group)=>{
                        return (<>
                            <Link to={`/group/${group.id}`} >
                                <h1> {group.groupName} </h1>
                            </Link>
                            <button value={group.id} onClick={joinGroup}> Join </button>
                        </>)
                    })
                }
            
        </>
    }
    if(data?.users){
        users = <>
             
                {
                    data?.users.map((user)=>{
                        return (<>
                            <Link to={`/user/${user.id}`} > 
                                <h1> {user.username} </h1>
                            </Link>
                        </>)
                    })
                }
          
        </>
    }
    if(data?.posts){
        posts = <>
                {
                    data?.posts.map((post)=>{
                        return (<>
                            <Link to={`/post/${post.id}`} >
                                <h1> {post.text} </h1>
                            </Link>
                        </>)
                    })
                }
            
        </>
    }
    return (
        <> 
            <div className="search-results">
                <div className="search-list" >
                    <h3>{`${data?.groups?.length} groups where Found`}</h3>
                    {
                        groups
                    }
                </div>
                <div className="search-list" >
                    <h3>{`${data?.users?.length} users where Found`}</h3>
                    {
                        users
                    }
                </div>
                <div className="search-list" >
                    <h3>{`${data?.posts?.length} posts where Found`}</h3>
                    {
                        posts
                    }
                </div>
            </div>

        </>
  )
}

export default Search ;