import axios from 'axios'
import React,  {useCallback, useEffect, useState} from 'react'

const url = 'https://jsonplaceholder.typicode.com'

function useCommentApi() {
    const [comment,setComment] =useState([])

    const getComments = useCallback(() =>{
        const readComments = async() =>  {
            const res = await axios.get(`${url}/comments`)
        }
        readComments()
    },[])

  useEffect(() =>{
    getComments()
  },[])
    
  return {
    comments: [comment,setComment]
  }
}

export default useCommentApi
