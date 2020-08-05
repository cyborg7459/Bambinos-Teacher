import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import {setCurrentUser} from '../../redux/user/user.actions';
import InputGroup from '../../components/input/input.component';
import Header from '../../components/header/header.component';
import Loader from '../../components/loader/loader.component';
import {SignInButton, SignInFormContainer} from './sign-in.style';

class SignInPage extends React.Component {

    state = {
        isLoading : false,
    }

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
        let SubmitBtn = document.getElementById('sign-in-submit');
        SubmitBtn.disabled = true;
        SubmitBtn.classList.add('disabled');
    }

    enableBtn = () => {
        let SubmitBtn = document.getElementById('sign-in-submit');
        SubmitBtn.disabled = false;
        SubmitBtn.classList.remove('disabled');
    }

    emailValidate = () => {
        let Email = document.getElementById('email-inp');
        const mailRE =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!mailRE.test(Email.value.trim()))
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

    formValidate = () => {
        if(this.emailValidate())
        {
            this.sendLoginRequest();
        }
        
    }

    sendLoginRequest = () => {
        this.setState({
            isLoading: true
        })
        const {setCurrentUser} = this.props;
        let Email = document.getElementById('email-inp').value;
        let Password = document.getElementById('password-inp').value;
        let errorMessage = document.getElementById('sign-in-error');
        
        let data = {
            email_id: Email,
            password: Password
        }
        let user = {
            email: Email
        }

        console.log(data);

        var config = {
        method: 'post',
        url: 'http://104.244.122.252:8080/Teacher/teacherSignUp/getByEmail',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(response => {
            console.log(response.data);
            if(response.data.status) {
                setCurrentUser(user);
                this.props.history.push('/onboard');
            }
            else {
                this.setState({
                    isLoading : false
                })
                if(response.data.msg === "Please sign up to login")
                    errorMessage.innerHTML = "You are no registered with Bambinos.in. Kindly sign-up before";
                else if(response.data.msg === "Invalid password")
                    errorMessage.innerHTML = "Password is incorrect !!! Please try again";
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="sign-in-container">
                {
                    this.state.isLoading ? <Loader text='Signing In'></Loader> : null
                }
                <Header></Header>
                <div className="form-container">
                <h1>Sign In</h1>
                    <SignInFormContainer>
                        <h5 className="text-center text-danger" id="sign-in-error"></h5>
                        <InputGroup
                            required
                            id='email-inp'
                            type = 'email'
                            placeholder= 'Enter Your Email'
                            label= 'Email'
                            handleChange = {this.emailValidate}
                        />
                        <InputGroup
                            required
                            id='password-inp'
                            type = 'password'
                            placeholder= 'Enter Your Password'
                            label= 'Password'
                        />
                        <SignInButton onClick={this.formValidate} id="sign-in-submit" className='btn-block btn-success mt-4' variant="primary">
                            Sign In
                        </SignInButton>
                        <p className="text-center mb-0">
                            <Link to="/signup" className="text-info">New User? Click here to sign up</Link>
                        </p>
                    </SignInFormContainer>
                </div>             
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(
    null,
    mapDispatchToProps
)(SignInPage);
