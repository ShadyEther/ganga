
"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProfilePage() {

    const loadUserData = async () => {
        const response = await axios.get(
            "./user/api"
        )

        // console.log(response.data.user)
        return response.data
    }

    const [userData,setUserData]=useState<string>('')
    
    useEffect(()=>{
        async function getData(){
            const resData=await(loadUserData())
            setUserData(JSON.stringify(resData))
        }
        getData()
    },[])
    


    return (
        <>
            UserData: 
            {userData}
        </>
    )
}

export default ProfilePage
