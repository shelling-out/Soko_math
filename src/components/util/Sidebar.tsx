import React from 'react'
import { link } from '../../types';
import LinksCard from './LinksCard';
interface Props {
    // content: link[]
}

let getKey = (map:Map<string,link[]> , key:string ) : link[] =>{
    let array : link[] = (map.get(key) || [] ) ;
    return [...array];
};

const Sidebar : React.FC<Props> = () => {
  let content = [{url:'/home' , icon:'home',name:'home', container:'news'}] ;
  let sortedContent = new Map<string,link[]>() ;
  content.map((link)=>{
    sortedContent.set(link.container ,  [...getKey(sortedContent,link.container) , link ] ) ;
  });
  let keysIterator = sortedContent.keys() ; 
  let counter = 0 ; 
  let keys = [];
  while(counter < sortedContent.size ){
        keys.push(keysIterator.next().value);
        counter++ ; 
  }
 
  return (
    <div className="sidebar">
        {
            keys.map((key)=>{
               return  <LinksCard links={sortedContent.get(key)} key={key}></LinksCard>
            })
        }
    </div>
  );
}
export default Sidebar ;