import axios from "axios";
import React, { createContext, useEffect, useState } from "react";



const ProductContext = createContext()

const ProductProvider = (props) => {

    const [data, setData] = useState([])

    const getData = ()=>{
      axios.get("/api/notes")
      .then(response => {
        // do something with the response data
        const {notes} = response.data
        setData(notes)
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  
    }

    useEffect(()=>{
        getData()
      }, [])

  const updateData = ()=>{
    
    getData()
      
  }

  const deleteEntry = (id)=>{

    axios.delete(`/api/notes/${id}`)
      .then(response => {
        // do something with the response data
        
        getData()

      })
      .catch(error => {
        // handle error
        console.log(error)
      });

    

   
    

  }
    return <ProductContext.Provider value={{
        data: data,
        updateData,
        deleteEntry
    }}>
        {props.children}
    </ProductContext.Provider>
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }