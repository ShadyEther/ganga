'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'




// axios.defaults.withCredentials = true;

interface profileDataInterface {
    name: String;
    email: String;
}

function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [profileData, setProfileData] = useState<profileDataInterface>({
        name: '',
        email: '',
    })
    const fetchProfile = async () => {


        try {
            const response = await axios.get('http://127.0.0.1:8000/api/user', { withCredentials: true, });
            // profileData.name=response.data.name
            // profileData.email=response.data.email
            const newProfileData = {
                name: response.data.name,
                email: response.data.email
            }
            setProfileData(newProfileData)
            console.log('Response:', response.data);
            // console.log('Response:', response.data);
        } catch (error) {
            console.error('Error from response');
        }
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchProfile()
    }, [])


    return (
        <>
            <button onClick={fetchProfile}>hehe</button>
            <h4>
                Name:{JSON.stringify(profileData.name)}
            </h4>
            <h4>
                Email:{JSON.stringify(profileData.email)}
            </h4>

        </>
    )
}

export default page