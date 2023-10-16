import React from 'react'; 
import {Link} from 'react-router-dom' ;
const buttons = [
    {
        url:"/",
        icon:"home"
    },
    {
        url:"/groups",
        icon:"groups"
    },
    {
        url:"/profile",
        icon:"profile"
    },{
        url:'/settings',
        icon:'settings'
    },
    {
        url:'/relations?status=',
        icon:'relations'
    }
];
interface buttonType {
    url:string ;
    icon:string;
};

const Header : React.FC = ()=>{
    
    return (
        <>
        <nav className='nav'>
            <img src="" alt="App Icon"/> 
            <input type="text" placeholder='start typing to search'/>   
            {
                buttons.map((button:buttonType)=>{
                    return (
                    <button className='btn ' key={button.url} >
                        <Link to={`${button.url}`}> {button.icon} </Link>
                    </button>);
                    
                })
            }
        </nav>
        </>
    )
};
export default Header ; 