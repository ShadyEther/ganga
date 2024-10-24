import { RegisterFormData } from "@/app/(routes)/(auth)/register/page";
import { axiosBackend } from "@/libs/axios/axiosBackend";



export async function registerBack(data: RegisterFormData){



    try{
        const response=await axiosBackend.post(
            "/api/account/register",
            {
                "first_name": data.first_name,
                "last_name": data.last_name,
                "username": data.username,
                "password": data.password,
                "re_password": data.re_password
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