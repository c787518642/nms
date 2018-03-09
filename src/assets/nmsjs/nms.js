var toFormData=(obj)=>{
    let str=""
    for(let i of Object.keys(obj)){
        str+=i+"="+obj[i]+"&"
    }
    return str.slice(0,-1)
}

