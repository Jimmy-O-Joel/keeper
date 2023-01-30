import React, { useState } from 'react'

import { ProductConsumer } from '../../context'

import axios from 'axios'


export default function AddNote(props) {

  const [userInput, setInput] = useState({
    title:"",
    content:""
  })

 
  const handleChange = (event)=>{

    const {name, value} = event.target
    setInput((prevValue)=>{
      return {...prevValue, 
              [name]: value
      }
    })
  }
  

  return (
    
        <ProductConsumer>

          {(value)=>{

            const {_id } = value.loggedIn.user
            const { token } = value.loggedIn

            console.log(_id)

            return(
              <div className='noteArea'>
              <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={userInput.title}/>
                <textarea onChange={handleChange} name="content" placeholder="What are you thinking today..." rows="3" value={userInput.content}/>

                      <button type="submit" onClick={async (e)=>{
                        e.preventDefault()

                      try {

                        const headers = {
                          "Authorization": `Bearer ${token}`
                        }
                        await axios.post("https://thoughtskeeper.onrender.com/api/notes", {
                          ...userInput,
                          userId: _id
                        }, {
                          headers: headers
                        })
                      } catch (error) {
                        console.log(error)
                      }

                      value.updateData()

                      setInput({
                        title:"",
                        content:""
                      })

                      }}><i className="fas fa-sharp fa-solid fa-plus"></i></button>
                      </form>      
                </div>
            )
              
              
          }}
            
        </ProductConsumer>
      
  )
}



