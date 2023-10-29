import React ,  { useState } from 'react'; 
import {Link} from 'react-router-dom' ;
import { useNavigate } from 'react-router-dom';

const buttons = [
    {
        url:"/",
        icon:"🏘 Home"
    },
    {
        url:"/groups",
        icon:"👥Groups"
    },
    {
        url:"/profile",
        icon:"👤Profile"
    },
    // {
    //     url:'/settings',
    //     icon:'⚙️Settings'
    // },
    {
        url:'/relations?status=myFriends',
        icon:'👫Relations'
    },
    {
        url:'/logout',
        icon:'📤Logout'
    }
    
];
interface buttonType {
    url:string ;
    icon:string;
};

const Header : React.FC = ()=>{
    const navigate = useNavigate() ; 
    let [ search , setSerach ] = useState<string>("") ; 
    const Search = (e)=>{
        e.preventDefault() ;
        navigate(`/result?q=${search}`) ;
    }
    if(document.documentURI.includes('/login')) {
        return <img src="/robot.png" alt="App Icon"/> ;
    }

    return (

        <>
        <nav className='nav flex-container'>
            <img src="/robot.png" alt="App Icon"/> 
            <form onSubmit={Search}>
                <div className="field">
                    <input type="text"  placeholder='start typing to search' value={search} onChange={(e)=> setSerach(e.target.value)} />   
                    <div className="line"></div>
                </div>
            </form>
            <div>
                <div>
                {
                    buttons.map((button:buttonType)=>{
                        return (
                        <button className='white-blue-theme txt-bg-1' key={button.url} >
                            <Link to={`${button.url}`}> {button.icon} </Link>
                        </button>);
                        
                    })
                }
                </div>
            </div>
        </nav>
        </>
    )
};
export default Header ; 