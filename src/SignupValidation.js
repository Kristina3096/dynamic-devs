function Validation(values){
    
    let error = {}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name===""){
        error.name="Name should not be empty"
    }else{
        error.name=""
    }

    if(values.email===""){
        error.email="Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Please enter a valid email address"
    }else{
        error.email=""
    }

    
    if(values.password===""){
        error.password="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password must be between 8 and 10 characters long and include both letters and numbers."
    }else{
        error.password=""
    }
    return error;
}
export default Validation;