import { loginBack } from "@/utils/server_actions/Login/loginHandler"
import { cookies } from "next/headers"


export interface StoreTokenStruct {  
    refresh: string  
    access: string  
}  


function allocateToken(token_struct:StoreTokenStruct){
    
    cookies().set({  
        name: "accessToken",  
        value: token_struct.access,  
        httpOnly: true,  
        sameSite: "strict",  
        secure: true,  
    })  
    cookies().set({  
        name: "refreshToken",  
        value: token_struct.refresh,  
        httpOnly: true,  
        sameSite: "strict",  
        secure: true,  
    })  
}


export async function GET(){
    return new Response("page doesnt exist")
}


export async function POST(req:Request){

    const reqData=await req.json()


    //handle login

    

    // return new Response(JSON.stringify(reqData))

    const resData = await(loginBack(reqData))
    

    if(resData.detail){

        return new Response(JSON.stringify(resData))
    }
    else{
        //handle token allocation
        allocateToken(resData)
        return new Response(JSON.stringify({success:"Successfully Logged In"}))

    }


}