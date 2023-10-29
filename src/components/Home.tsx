import React , {useState} from 'react' ; 
import { Link } from 'react-router-dom';
let levels: number[] = []; 
for(let i =0 ; i < 10 ;i++) levels.push(i+1) ;


const  Home = ()=> {
  
  return (
        <>
        <h2 className='center'> Choose a level </h2>
        <div className="grid-container">
            {
                levels?.map((level) =>{
                    return (
                        <Link to={`/level/${level}`}>
                            <button key={level} >
                                  level {level}  
                            </button>
                        </Link>
                    )
                })
            }
        </div>
        </>

  )
}
export default Home ; 