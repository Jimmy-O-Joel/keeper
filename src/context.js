import axios from "axios";
import React, { createContext, useEffect, useState } from "react";



const ProductContext = createContext()

const ProductProvider = (props) => {


    const [isAuthFailure, setIsAuthFailure] = useState(false)
    const [data, setData] = useState([])
    const [loggedIn, setLoggedIn] = useState({})
    const [isAuthenticated, setAuthenticated] = useState(false)

    const headers = {
      "Authorization": `Bearer ${loggedIn.token}`
    }


    const register = async (userDetails, navigate)=>{

      const { password, confirm } = userDetails

      if (password === confirm) {

          axios.post("https://thoughtskeeper.onrender.com/api/auth/register", userDetails)
          .then(response=> {
              setLoggedIn(response.data)
              navigate("/home")
              setAuthenticated(true)
          }).catch(error => {
              navigate("/")
              console.log(error)
          })

      } else {
        setIsAuthFailure(true)
      }

    }

    const login = async (userDetails, navigate)=> {

      axios.post("https://thoughtskeeper.onrender.com/api/auth/login", userDetails)
      .then(response=> {
          setLoggedIn(response.data)
          navigate("/home")
          setAuthenticated(true)
      }).catch(error => {
          navigate("/")
          setIsAuthFailure(true)
          console.log(error)
      })
    }

    const getData = ()=>{
      
      axios.get("https://thoughtskeeper.onrender.com/api/notes", {
        headers: headers
      })
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
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const updateData = ()=>{
    
    getData()
      
  }



  const deleteEntry = (id)=>{

    const {_id: userID} = loggedIn.user

    axios.delete(`https://thoughtskeeper.onrender.com/notes/${id}/${userID}`, {
      headers: headers
    })
      .then(response => {
        // do something with the response data
        
        getData()

      })
      .catch(error => {
        // handle error
        console.log(error)
      });
    }

    const patchLike = (postId)=>{
      const {_id: userID} = loggedIn.user

      axios.patch(`https://thoughtskeeper.onrender.com/api/notes/${postId}/like`, { userId: userID},{
        headers: headers
      }).then(response => {
        //do something with response
        getData()
        console.log(response.data)
      })
      .catch(error => {
        //handle error
        console.log(error)
      })
    }

    

   
    

    return <ProductContext.Provider value={{
        isAuthFailure,
        isAuthenticated,
        loggedIn,
        data: data,
        updateData,
        deleteEntry,
        patchLike,
        register,
        login,
    }}>
        {props.children}
    </ProductContext.Provider>
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }