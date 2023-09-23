import React from 'react'
import { link } from '../../types';
interface Props {
    links: link[]|undefined
}
const LinksCard : React.FC<Props> = ({links}) => {
  links = ([]||links) ;
  return (
    <>

        <div> {links[0].container} </div>
        {
            links.map((link)=>{
                <>
                    <div> 
                        <a href={link.url}>
                            {link.name}
                        </a>
                    </div>
                </>
            })
        }
    </>  
  )
}

export default LinksCard ;