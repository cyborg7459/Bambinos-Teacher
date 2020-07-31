import React from 'react';
import InputGroup from '../input/input.component';
import {Link} from 'react-router-dom';

import {SignUpForm, SignUpButton} from './signup-details.styles';

class SignUpDetails extends React.Component {
    
    validationError = (target, errorMessage) => {
        target.classList.add('error');
        target.nextElementSibling.innerHTML = `${errorMessage}`;
        this.disableBtn();
    }

    removeErrors = (target) => {
        target.classList.remove('error');
        target.nextElementSibling.innerHTML = " ";
        this.enableBtn();
    }

    disableBtn = () => {
        let SubmitBtn = document.getElementById('sign-up-submit');
        SubmitBtn.disabled = true;
        SubmitBtn.classList.add('disabled');
    }

    enableBtn = () => {
        let SubmitBtn = document.getElementById('sign-up-submit');
        SubmitBtn.disabled = false;
        SubmitBtn.classList.remove('disabled');
    }

    nameValidate = () => {
        let Name = document.getElementById('name-inp');
        if(Name.value.length==0)
        {
            this.validationError(Name, "Please enter your name");
            return false;
        }
        else
        {
            this.removeErrors(Name);
            return true;
        }
    }

    emailValidate = () => {
        let Email = document.getElementById('email-inp');
        const mailRE =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(Email.value.length==0)
        {
            this.validationError(Email, "Please enter email");
            return false;
        }
        else if(!mailRE.test(Email.value.trim()))
        {
            this.validationError(Email, "Please enter a valid email address");
            return false;
        }
        else 
        {
            this.removeErrors(Email);
            return true;
        }
    }

    phoneValidate = () => {
        let Phone = document.getElementById('phone-inp');
        let phoneRE = /^\d+$/;
        if(Phone.value.length==0)
        {
            this.validationError(Phone, "Please enter phone number")
            return false;
        }
        else if(!phoneRE.test(Phone.value.trim()))
        {
            this.validationError(Phone, "Phone number must contain only digits");
            return false;
        }
        else if(Phone.value.length!=10)
        {     
            this.validationError(Phone, "Phone number must be 10 digits");
            return false;
        }
        else 
        {
            this.removeErrors(Phone);
            return true;
        }
    }

    validate = () => {
        if(this.nameValidate() && this.emailValidate() && this.phoneValidate())
            return true;
        else
            return false;
    };

    sendOTP = () => {
        if(this.validate())
            this.props.handleSubmit();
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