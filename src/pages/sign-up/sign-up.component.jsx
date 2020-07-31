import React from 'react';
import axios from 'axios';
import './sign-up.style.css';

import SignUpDetails from '../../components/signup-details/signup-details.components';
import OTPForm from '../../components/otp-form/otp-form.component';
import Header from '../../components/header/header.component';
import SetPasswordForm from '../../components/set-password/set-password.component';

class SignUpPage extends React.Component {
    
    state = {
        step: 1,
        otp: 1234, 
        name: '',
        email: '',
        phone: ''
    }

    sendData = (nameV, emailV, phoneV) => {
        let data = {
            name: nameV,
            email: emailV,
            phone: phoneV
        }
        
        var config = {
        method: 'post',
        url: 'localhost:3000/teacherSignUp/save',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    };

    sendOtp = () => {
        let nameInp = document.getElementById('name-inp');
        let emailInp = document.getElementById('email-inp');
        let phoneInp = document.getElementById('phone-inp');     
        this.updateState(nameInp.value, emailInp.value, phoneInp.value);
        this.sendData(nameInp.value, emailInp.value, phoneInp.value);
        this.setState({
            step:2
        })
    }

    setPassword = () => {
        let passwordInp = document.getElementById('password-inp');
        let data = {
            email_id : this.state.email,
            password : passwordInp.value
        }
        let config = {
        method: 'post',
        url: 'localhost:8089/teacherSignUp/savePassword',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    }

    updateState = (nameV, mailV, phoneV) => {
        this.setState({
            name: nameV,
            email: mailV,
            phone: phoneV
        });
    }

    OTPSuccess = () => {
        this.setState({
            step: 3
        })
    }

    render() {
        const {step} = this.state;

        switch(step) {
            case 1: 
                return (
                    <div className="sign-up-container">
                        <Header></Header>
                        <SignUpDetails handleSubmit={this.sendOtp}></SignUpDetails>
                    </div>
                );
            case 2: 
                return (
                    <div className="sign-up-container">
                    <Header></Header>
                    <OTPForm step={this.state.step} otp={this.state.otp} OTPSuccess={this.OTPSuccess}></OTPForm>
                    </div>
                );
            case 3: 
                return (
                    <div className="sign-up-container">
                    <Header></Header>
                    <SetPasswordForm handleSubmit={this.setPassword}></SetPasswordForm>
                    </div>
                );
        }
        
    }
    
}

export default SignUpPage;