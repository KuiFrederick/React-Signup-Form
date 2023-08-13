import React,{useState, useContext} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';
import FormValidations from "../../contexts/FormValidations";
import useErrors from '../../hooks/useErrors';


function PersonalData({onFormSubmit}){
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [ssn, setSsn] = useState("");
    const [offers, setOffers] = useState(true);
    const [newsletter, setNewsletter] = useState(true);
    const validate = useContext(FormValidations);
    const [errors, validateInput, noErrors] = useErrors(validate);
    
    return(
        <form 
        onSubmit={(e)=>{
            e.preventDefault();
            if(noErrors()){
                onFormSubmit({name, lastname, ssn, offers, newsletter});
            }
        }}
        >
            <TextField
            value={name}
            onChange={(e)=> {
                setName(e.target.value);
            }} 
            id="name" 
            name="name"
            label="Name" 
            variant="outlined"
            fullWidth
            required={true}
            margin="normal"/>

            <TextField
            value={lastname}
            onChange={(e)=> {
                setLastname(e.target.value);
            }}  
            id="lastname" 
            name="lastname"
            label="Last name" 
            variant="outlined"
            fullWidth
            required={true}
            margin="normal"/>
            
            <TextField 
            id="ssn" 
            value={ssn}
            onChange={(e)=>{
                setSsn(e.target.value)
            }}
            onBlur={validateInput}
            name="ssn"
            error={!errors.ssn.valid}
            helperText={errors.ssn.msg}
            label="Social Security Number" 
            variant="outlined"
            fullWidth
            required={true}
            margin="normal"/>
            
            <FormControlLabel
            control={
                <Switch
                checked={offers}
                onChange={(e) => {
                    setOffers(e.target.checked);
                }}
                name="Offers"
                color="primary"
            />}
            label="Offers"/>


            <FormControlLabel
            control={
                <Switch
                checked={newsletter}
                onChange={(e) => {
                    setNewsletter(e.target.checked);
                }}
                name="Newsletter"
                color="primary"
            />}
            label="Newsletter"/>
            
            {/*
            <Button 
            variant="contained" 
            color="primary">
                Return
            </Button>
            */}
            <Button variant='contained' color='primary' type="submit">Next</Button>
        </form>
    );
}
 
export default PersonalData;