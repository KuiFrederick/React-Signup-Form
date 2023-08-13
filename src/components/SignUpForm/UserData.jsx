import React, {useContext, useState} from 'react';
import {TextField, Button} from '@material-ui/core'
import FormValidations from "../../contexts/FormValidations";
import useErrors from '../../hooks/useErrors';

function UserData({onFormSubmit}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validate = useContext(FormValidations);
    const [errors, validateInput, noErrors] = useErrors(validate);

    return(
        <form
        onSubmit={(e)=>{
            e.preventDefault();
            if(noErrors()){
                onFormSubmit({email, password})
            }
        }}
        >
            <TextField
            value = {email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }} 
            name="email"
            id='email'
            label="Email" 
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            required={true}
            />

            <TextField
            value = {password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }} 
            onBlur={validateInput}
            error={!errors.password.valid}
            helperText={errors.password.msg}
            name="password"
            id="password"
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            fullWidth
            required={true}
            />


            <Button
            type="submit"
            variant="contained"
            color= "primary">
                Next
            </Button>
        </form>
    );
}

export default UserData;