import React , {useState} from 'react'
import { useParams } from 'react-router-dom'
import levels from './util/data/levels';
import Board from './Board';
let colors = {
    '.': 'white',
    '#':'red',
    '$':'blue',
};

const Level = ()=> {

  const {id} = useParams() ;
  const [level , setLevel ] = useState<string[][]>(levels[id-1]);
  const [cell , setCell ] = useState<string>("") ;
  const board = new Board(level) ; 
  
  const move = (e)=>{
    if(cell == '') return ;
    if(!e.code.includes('Arrow'))return; 
    let dir = e.code.split('Arrow')[1][0] ;
    let x = Number(cell.split('-')[0]);
    let y = Number(cell.split('-')[1] );
    let [newX,newY] = board.move(x,y,dir) ; 
    
    setCell(`${newX}-${newY}`);

  }
  return (
    <>
            <div onKeyDown={move}>
                <button> restart </button>
                <h2 className='center'> Level {id} </h2>
                <div className="center">
                    {
                        level?.map((row:string[],x)=>{
                            return (
                                    <div key={x}>
                                        {
                                            row?.map((value:string,y:number)=>{
                                                let color = colors[`${value}`];
                                                
                                                if(value.includes('&'))
                                                    color = 'dark-grey'
                                                let printedValue = (value == '.' || value == '$' || value == '#') ? '' : value ;
                                                return (
                                                    
                                                        <button className={`grey ${color}`} value={`${x}-${y}`} onClick={(e)=>{setCell(e.target.value); }} key={`${x}-${y}`}> 
                                                            {printedValue.split('$')[0]}.
                                                        </button>
                                                    
                                                )
                                            })
                                        }
                                    </div>
                            )
                        })
                    }
                </div>
                
            </div>

    </>
  )
}

export default Level