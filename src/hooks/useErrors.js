import React,{useState} from 'react';

function useErrors(validate){
    const initialState = createInitialState(validate);
    const [errors, setError] = useState(initialState);

    function validateInput(e){
        const {name, value} = e.target;
        const newState = {...errors};
        newState[name] = validate[name](value);
        setError(newState);
    }

    function noErrors(){
        for(let input in errors){
            if(!errors[input].valid){
                return false;
            }
        }
        return true;
    }
    return [errors, validateInput, noErrors];
}

function createInitialState(validate){
    const initialState = {}
    for (let field in validate){
        initialState[field]={valid:true, msg:""}
    }
    return initialState;
}

export default useErrors;