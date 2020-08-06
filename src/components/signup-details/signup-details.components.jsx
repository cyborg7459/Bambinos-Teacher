import React from 'react';
import InputGroup from '../input/input.component';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {SignUpForm, SignUpButton} from './signup-details.styles';

class SignUpDetails extends React.Component {
    
    nameValidate = () => {
        let Name = document.getElementById('name-inp');
        let targetBtn = document.getElementById('sign-up-submit');
        let validationError = this.props.validationError;
        let removeErrors = this.props.removeErrors;
        if(Name.value.length===0)
        {
            validationError(Name, "Please enter your name", targetBtn);
            return false;
        }
        else
        {
            removeErrors(Name, targetBtn);
            return true;
        }
    }

    emailValidate = () => {
        let Email = document.getElementById('email-inp');
        let targetBtn = document.getElementById('sign-up-submit');
        let validationError = this.props.validationError;
        let removeErrors = this.props.removeErrors;
        const mailRE =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(Email.value.length===0)
        {
            validationError(Email, "Please enter email", targetBtn);
            return false;
        }
        else if(!mailRE.test(Email.value.trim()))
        {
            validationError(Email, "Please enter a valid email address", targetBtn);
            return false;
        }
        else 
        {
            removeErrors(Email, targetBtn);
            return true;
        }
    }

    phoneValidate = () => {
        let Phone = document.getElementById('phone-inp');
        let targetBtn = document.getElementById('sign-up-submit');
        let validationError = this.props.validationError;
        let removeErrors = this.props.removeErrors;
        let phoneRE = /^\d+$/;
        if(Phone.value.length===0)
        {
            validationError(Phone, "Please enter phone number", targetBtn)
            return false;
        }
        else if(!phoneRE.test(Phone.value.trim()))
        {
            validationError(Phone, "Phone number must contain only digits", targetBtn);
            return false;
        }
        else if(Phone.value.length!==10)
        {     
            validationError(Phone, "Phone number must be 10 digits", targetBtn);
            return false;
        }
        else 
        {
            removeErrors(Phone, targetBtn);
            return true;
        }
    }

    validateAll = () => {
        if(this.nameValidate() && this.emailValidate() && this.phoneValidate())
            return true;
        else
            return false;
    };

    saveUserData = (nameV, emailV, phoneV) => {
        
        let data = {
            name: nameV,
            email_id: emailV,
            mobile: phoneV
        }

        console.log(this.props);
        
        var config = {
        method: 'post',
        url:'https://teacher-signup.bambinos.in:8443/Teacher/teacherSignUp/save',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };
        console.log(data);

        axios(config)
        .then(response => {
            if(response.data.status) {
                this.props.setOTP(parseInt(response.data.data.otp));
                this.props.stepChange(2);
                this.props.loadingEnd();
            }
            else {
                alert("You're already registered");
                this.props.loadingEnd();
                setTimeout(this.props.history.push("/signin"), 2000);
            }

            console.log(response);
        })
        .catch(error => console.log(error));
    };

    sendOTP = () => {
        console.log("Sending OTP");
        if(this.validateAll()) {
            this.props.loadingStart();
            let nameInp = document.getElementById('name-inp').value;
            let emailInp = document.getElementById('email-inp').value;
            let phoneInp = document.getElementById('phone-inp').value;     
            this.props.updateState(nameInp, emailInp, phoneInp);
            this.saveUserData(nameInp, emailInp, phoneInp);
        }
    }

    render() {
        return(
            <div className="form-container">
                <h1>Register With Us</h1>
                <SignUpForm>
                    <InputGroup
                        required
                        id='name-inp'
                        type = 'text'
                        placeholder= 'Enter Your Name'
                        label= 'Full Name'
                        handleChange = {this.nameValidate}
                    />
                    <InputGroup
                        required
                        id='email-inp'
                        type = 'email'
                        placeholder= 'Enter your email ID'
                        label= 'Email Address'
                        handleChange = {this.emailValidate}
                    />
                    <InputGroup
                        required
                        id='phone-inp'
                        type = 'text'
                        placeholder= 'Enter your phone number'
                        label= 'Phone Number'
                        handleChange = {this.phoneValidate}
                    />
                    <SignUpButton onClick={this.sendOTP} id="sign-up-submit" className='btn-block btn-success mt-4' variant="primary">
                        Send OTP
                    </SignUpButton>
                    <p className="text-center mb-0">
                        <Link to="/signin" className="text-info">Already have an account? Click here to sign in</Link>
                    </p>
                </SignUpForm>
            </div>
        )
    }
}

export default SignUpDetails;