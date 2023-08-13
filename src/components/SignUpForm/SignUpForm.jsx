import React, {useState, useEffect} from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';
import {Typography, Stepper, StepLabel, Step} from '@material-ui/core';

function SignUpForm({onFormSubmit}){
    const[stage, setStage] = useState(0);
    const[capturedData, setCapturedData] = useState({});
    useEffect(()=>{
        if (stage === formPages.length-1){
            onFormSubmit(capturedData);
    }})

    const formPages=[
        <UserData onFormSubmit={captureData}/>,
        <PersonalData onFormSubmit={captureData}/>,
        <DeliveryData onFormSubmit={captureData}/>,
        <Typography variant="h5" align="center">Thanks for signing up!</Typography>
    ];

    function captureData(data){
        setCapturedData({...capturedData, ...data});
        nextStage();
    }

    function nextStage(){
        setStage(stage+1);
    }

    return(
        <>
            <Stepper activeStep={stage}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal</StepLabel></Step>
                <Step><StepLabel>Delivery</StepLabel></Step>
                <Step><StepLabel>You're done!</StepLabel></Step>
            </Stepper>
            {formPages[stage]}
        </>
    );
}

export default SignUpForm;