//display contant
const displaycontent=(content)=>{
    //result is id of input tag
    result.value+=content
}

const clearScreen =()=>{
    result.value=""
}

const finalOut =()=>{
    try{result.value=eval(result.value)}
    catch{
        result.value="Error"
    }
}

const removeItem=()=>{
    result.value=result.value.slice(0,-1)
}