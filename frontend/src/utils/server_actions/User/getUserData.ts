import { axiosBackend } from "@/libs/axios/axiosBackend"
import { cookies } from "next/headers"

export async function getUserDataBack() {


    const access_token = cookies().get("accessToken")?.value 

    try{
        const response=await axiosBackend.get(
            "/api/account/user",
            {
                headers:{
                    'Authorization': `Bearer ${access_token}`
                }
            }
            
              
        )

        // console.log("responsedata yo here: ",response)
        return response.data

    }
    catch(err){
        // console.log("yoerr here:", err.response.data)
        return err.response.data
    }
    
}