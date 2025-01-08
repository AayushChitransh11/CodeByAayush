async function signup(){
    const username=document.getElementById("signup_username").value;
    const password=document.getElementById("signup_password").value;
    await axios.post("http://localhost:3000/signup",{
            username:username,
            password:password
        })
        alert("You are signed in!");
}
async function signin(){
    const username=document.getElementById("signin_username").value;
    const password=document.getElementById("signin_password").value;
    // await axios.post("http://localhost:3000/signin",{
    //         username:username,
    //         password:password
    //     })
}
function logout(){

}