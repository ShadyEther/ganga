import { LoginFormData } from "@/app/(routes)/(auth)/login/page";
import { axiosBackend } from "@/libs/axios/axiosBackend";



export async function loginBack(data: LoginFormData){



    try{
        const response=await axiosBackend.post(
            "/api/token/",
            {
                "username":data.username,
                "password":data.password
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