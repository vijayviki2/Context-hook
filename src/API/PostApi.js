import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com'

function usePostApi() {
    const [posts,setPosts] = useState([])

    const getPosts = useCallback(() =>{
        const readPosts = async () => {
            const res = await axios.get(`${url}/posts`)
            setPosts(res.data)
        }

        readPosts()
    },[])

    useEffect(() => {
        getPosts()
    },[])

  return {
        postInfo: [posts, setPosts]
  }
}

export default usePostApi
