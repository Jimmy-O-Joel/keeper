import React from 'react'
import Header from './Header';
import AddNote from './AddNote';
import Note from './Note';
import { ProductConsumer } from '../../context';

export default function Homepage() {
  return (
    <div>
      <ProductConsumer>

    {(value)=>{
      const {data} = value
      console.log(data)
      return(
        <div>

                <div className='sticky'>
                <Header/>
                <AddNote/>
                </div>

                <div className='content'>

                <div className='container'>
                    <div className='row'>

                    {data.map((note, index)=>{
                        const {_id:noteID, title, content, likes} = note
                        return <Note key={noteID} id={noteID} title={title} content={content} likes={likes}/>
                    })}
                    </div>

                </div>
            

                </div>
        </div>

      )
    }}

    
    </ProductConsumer>
    </div>
  )
}
