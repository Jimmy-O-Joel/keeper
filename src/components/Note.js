import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ProductConsumer } from '../context'

export default function Note(props) {
  return (
    <ProductConsumer>

      {(value)=>{

        const {deleteEntry} = value

        return(
          <div className='note col col-lg-2'>


            <h1>{props.title}</h1>
            <p>{props.content}</p>
            
            <button onClick={()=>{
                  deleteEntry(props.id)
            }}><i class="fas fa-trash"></i></button>
          </div>
        )

      }}

      
    </ProductConsumer>
  )
}
