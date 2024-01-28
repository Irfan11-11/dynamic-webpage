const register=()=>{
    if(username.value=="" || email.value=="" || place.value==""){
        alert("please fill the form completlly!!!")
    }else{
        user= username.value
        localStorage.setItem("user",user)
        //redirect dynamic webpage
        window.location="index1.html"
        alert("Register successfully completed!!")
    }
}