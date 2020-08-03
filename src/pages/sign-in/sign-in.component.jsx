import React from 'react';
import './sign-in.style.css';
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {connect} from 'react-redux';

import {setCurrentUser} from '../../redux/user/user.actions';
import InputGroup from '../../components/input/input.component';
import Header from '../../components/header/header.component';

class SignInPage extends React.Component {

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
        const {setCurrentUser} = this.props;
        let Email = document.getElementById('email-inp');
        let Password = document.getElementById('password-inp');
        
        let data = {
            email_id: Email.value,
            password: Password.value
        }
        let user = {
            email: Email.value
        }

        console.log(data);

        var config = {
        method: 'post',
        url: 'https://7315fdfcf7b5.ngrok.io/teacherSignUp/getByEmail',
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
                if(response.data.msg == "Please sign up to login")
                {
                    alert("This email ID is not registered with us. Please sign up with us");
                    this.props.history.push('/signup');
                }
                else if(response.data.msg == "Invalid password")
                {
                    alert("The password you've entered is incorrect");
                }
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="sign-in-container">
                <Header></Header>
                <div className="form-container">
                <h1>Sign In</h1>
                    <Form id="sign-in-form">
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
                        <Button onClick={this.formValidate} id="sign-in-submit" className='btn-block btn-success mt-4' variant="primary">
                            Sign In
                        </Button>
                        <p className="text-center mb-0">
                            <Link to="/signup" className="text-info">New User? Click here to sign up</Link>
                        </p>
                    </Form>
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