import React from 'react'
import { link } from '../types';
import LinksCard from './util/LinksCard';
interface Props {
    content: link[]
}

let getKey = (map:Map<string,link[]> , key:string ) : link[] =>{
    let array : link[] = (map.get(key) || [] ) ;
    return [...array];
};

const Sidebar : React.FC<Props> = ({content}) => {

  let sortedContent = new Map<string,link[]>() ;
  content.map((link)=>{
    sortedContent.set(link.container ,  getKey(sortedContent,link.container) ) ;
  });
  let keysIterator = sortedContent.keys() ; 
  let counter = 0 ; 
  let keys = [];
  while(counter < sortedContent.size ){
        keys.push(keysIterator.next().value);
        counter++ ; 
  }
  return (
    <>
        {
            
            keys.map((key)=>{
                <LinksCard links={sortedContent.get(key)}></LinksCard>
            })
        }
    </>
  );
}
export default Sidebar ;