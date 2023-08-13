import React,{useState} from 'react';
import {TextField, Button} from "@material-ui/core";

function DeliveryData({onFormSubmit}){
    const [street, setStreet] = useState("");
    const [zipcep, setZipcep] = useState("");
    const [aptNo, setAptNo] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [country, setCountry] = useState("");

    return(
        <form
        onSubmit={(e)=> {
            e.preventDefault();
            onFormSubmit({street,zipcep,aptNo,city,uf});
        }}>
            <TextField
            value={zipcep}
            onChange={(e)=>{
                setZipcep(e.target.value);
            }}
            type="number"
            label="ZIP code/CEP"
            id="zipcep"
            variant="outlined"
            margin="normal"
            required={true}/>

            <TextField
            value={street}
            onChange={(e)=>{
                setStreet(e.target.value);
            }}
            type="text"
            label="Street"
            id="street"
            variant="outlined"
            fullWidth
            margin="normal"
            required={true}/>

            <TextField
            value={aptNo}
            onChange={(e)=>{
                setAptNo(e.target.value);
            }}
            type="text"
            label="Apartment/House number"
            id="ap"
            variant="outlined"
            margin="normal"/>

            <TextField
            value={city}
            onChange={(e)=>{
                setCity(e.target.value);
            }}
            type="text"
            label="City"
            id="city"
            variant="outlined"
            margin="normal"
            required={true}/>

            <TextField
            value={uf}
            onChange={(e)=>{
                setUf(e.target.value);
            }}
            type="text"
            label="State"
            id="state"
            variant="outlined"
            margin="normal"
            required={true}/>

            {/*
            <Button 
            variant="contained" 
            color="primary">
                Return
            </Button>
            */}

            <Button 
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            >
                Sign Up
            </Button>

        </form>
    );
}

export default DeliveryData;