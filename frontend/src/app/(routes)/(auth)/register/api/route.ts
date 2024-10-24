import { registerBack } from "@/utils/server_actions/Register/registerHandler"









export async function GET(){
    return new Response("page doesnt exist")
}


export async function POST(req:Request){

    const reqData=await req.json()


    //handle login

    

    // return new Response(JSON.stringify(reqData))

    const resData = await(registerBack(reqData))

    
    return new Response(JSON.stringify(resData))

    // if(resData.error){

    // }
    // else{
    //     //handle token allocation
       
    //     return new Response("Successfully Logged In")

    // }


}