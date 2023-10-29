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
        <div className="links-card-header"> 
            <h2>
                {links[0].container} 
            </h2>
        </div>
        
        {
            links.map((link)=>{
            return (
                    <div key={link.url} > 
                        <div className="btn white-blue-theme">
                            <Link to={link.url}>
                                <h3>
                                    {link.name}
                                </h3>
                            </Link>
                        </div>
                    </div>        
                );
            })
        }
    </div> 
  )
}

export default LinksCard ;