import React from 'react'
import { link } from '../../types';
import LinksCard from './LinksCard';
import { Group  , Default , Relations} from './data/sidebar';
interface Props {
    // content: link[]
}

let getKey = (map:Map<string,link[]> , key:string ) : link[] =>{
    let array : link[] = (map.get(key) || [] ) ;
    return [...array];
};

const Sidebar : React.FC<Props> = () => {

  let content = [ ...Default ] ;
  if(document.documentURI.includes('/login')) {
    return <></>
    
  }
  if(document.documentURI.includes('/group/')){
    content = [...content , ...Group] ; 
  }
  if(document.documentURI.includes('/relations?')){
    content = [...content , ...Relations] ; 
  }
  let sortedContent = new Map<string,link[]>() ;
  content?.map((link)=>{
    
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
    <div className="sidebar white-blue-theme">
        {
            keys.map((key)=>{
               return  <LinksCard links={sortedContent.get(key)} key={key}></LinksCard>
            })
        }
    </div>
  );
}
export default Sidebar ;