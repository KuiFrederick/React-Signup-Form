function checkSSN(ssn){
    if(ssn.length !== 11){
        return{valid:false, msg:"SSN must have exactly 11 numbers."}
    }
    else{
        return{valid:true, msg:""}
    }
}

function checkPassword(password){
    if (password.length <8 || password.length > 20){
        return {valid:false, msg: "Password must have between 8 and 20 characters"}
    }
    else{
        return{valid:true, msg:""}
    }
}

export {checkSSN, checkPassword}