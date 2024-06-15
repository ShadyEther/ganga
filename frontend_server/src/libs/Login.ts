const Login=async ()=>{
    const response=await fetch('/django/login',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify( {
                'username':'yobabes',
                'password':'baby'
            } ),
        }
    )
    console.log(response);
}