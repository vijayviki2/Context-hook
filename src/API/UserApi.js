import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

function useUserApi() {
    const [users,setUsers] = useState ([])

    const getUsers = useCallback(() => {
        const readUsers = async () => {
            const res = await axios.get(`${url}/users`)
            setUsers(res.data)
        }
        readUsers()
    },[])

    useEffect(() => {
        getUsers()
    },[])

  return {
   userInfo: [users, setUsers]
  }
}

export default useUserApi
