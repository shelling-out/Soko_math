import React from 'react'
import { link } from '../../types';
import { Link } from 'react-router-dom';
interface Props {
    links: link[]|undefined
}
const LinksCard : React.FC<Props> = ({links}) => {
  links = (links||[]) ;
  
  return (
    <div className="links-card">
        <div> {links[0].container} Container</div>
        {
            links.map((link)=>{
            return (
                    <div key={link.url}> 
                        <Link to={link.url}>
                            {link.name}
                        </Link>
                    </div>        
                );
            })
        }
    </div> 
  )
}

export default LinksCard ;