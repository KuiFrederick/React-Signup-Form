import './App.css';
import React, {Component} from 'react';
import SignUpForm from './components/SignUpForm';
import {Container, Typography, Box} from '@material-ui/core';
import {checkSSN, checkPassword} from './models/signup.js';
import FormValidations from './contexts/FormValidations'

class App extends Component{     
    render(){
        return (
            <Container component="article" maxWidth="sm">
                <Box m={3}>
                    <Typography variant='h3' 
                    component='h1'
                    align='center'
                    py={400}
                    >Sign Up Form</Typography>
                </Box>
                <FormValidations.Provider value={{ssn:checkSSN, password:checkPassword}}>
                    <SignUpForm onFormSubmit={onFormSubmit}/>
                </FormValidations.Provider>
            </Container>
        );
    }
}

function onFormSubmit(data){
    console.log(data);
}
export default App;