import React from 'react'

import { ProductConsumer } from '../context'

export default function Note(props) {
  return (
    <ProductConsumer>

      {(value)=>{

        const {deleteEntry} = value

        return(
          <div className='note col-12 col-md-6 col-lg-3'>


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
