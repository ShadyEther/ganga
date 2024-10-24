import { getUserDataBack } from "@/utils/server_actions/User/getUserData"


export async function GET() {

    const data= await(getUserDataBack())

    return new Response(JSON.stringify((data)))
    
}