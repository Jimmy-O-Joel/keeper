import React from 'react'

import { ProductConsumer } from '../../context'
import { FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material'


export default function Note(props) {
  return (
    <ProductConsumer>

      {(value)=>{

        const {deleteEntry, patchLike} = value
        const {_id } = value.loggedIn.user
        const isLiked = Boolean(props.likes[_id])
        const likesCount = Object.keys(props.likes).length

        return(
          <div className='note col-12 col-md-6 col-lg-3'>


            <h1>{props.title}</h1>
            <p>{props.content}</p>

              <Box 
                position = "absolute"
                left = "10px"
                bottom = "10px"
                color="var(--mainColor) !important"
              >

                <IconButton 

                  sx={{
                    border : "none",
                    width : "40px",
                    height :"40px",
                    outline: "none",
                    background: "white",
                    color: "var(--mainColor) !important"
                  }}
                  className='favIcon'
                  onClick={()=>{
                    patchLike(props.id)
                  }}
                  >
                  {isLiked? <FavoriteOutlined/> : <FavoriteBorderOutlined/>}
                </IconButton>

                <Typography
                  sx={{
                    display: "inline"
                  }}
                >{likesCount}</Typography>

              </Box>

            <button className='deleteIcon' onClick={()=>{
                  deleteEntry(props.id)
            }}><i className="fas fa-trash"></i></button>
          </div>
        )

      }}

      
    </ProductConsumer>
  )
}
