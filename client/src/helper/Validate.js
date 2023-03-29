import toast from 'react-hot-toast'


export async function registerValidate(values){
    const errors = emailVerify({}, values)
    passwordVerify(errors, values)
    return errors;
}


function emailVerify(errors = {}, values){
    if(!values.email){
        errors.email = toast.error("Email is required...!")
    }else if(values.email.includes(" ")){
        errors.email = toast.error("Invalid email address..!")
    }

    return errors;
}

function passwordVerify(errors = {}, values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        errors.password = toast.error("Password is required...!")
    }else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong password..!")
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be atleast 4 characters...!")
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    }
    return errors;
}