import React from 'react';
import axios from 'axios';
import './sign-up.style.css';
import {connect} from 'react-redux';

import SignUpDetails from '../../components/signup-details/signup-details.components';
import OTPForm from '../../components/otp-form/otp-form.component';
import Header from '../../components/header/header.component';
import SetPasswordForm from '../../components/set-password/set-password.component';
import {setCurrentUser} from '../../redux/user/user.actions';

class SignUpPage extends React.Component {
    
    state = {
        step: 1,
        otp: 1234, 
        name: '',
        email: '',
        phone: ''
    }

    validationError = (target, errorMessage, targetBtn) => {
        target.classList.add('error');
        target.nextElementSibling.innerHTML = `${errorMessage}`;
        this.disableBtn(targetBtn);
    }

    removeErrors = (target, targetBtn) => {
        target.classList.remove('error');
        target.nextElementSibling.innerHTML = " ";
        this.enableBtn(targetBtn);
    }

    disableBtn = (btn) => {
        btn.disabled = true;
        btn.classList.add('disabled');
    }

    enableBtn = (btn) => {
        btn.disabled = false;
        btn.classList.remove('disabled');
    }

    updateState = (nameV, mailV, phoneV) => {
        this.setState({
            name: nameV,
            email: mailV,
            phone: phoneV
        });
    }
    
    saveUserData = (nameV, emailV, phoneV) => {
        let data = {
            name: nameV,
            email_id: emailV,
            mobile: phoneV
        }

        console.log(this.props);
        
        var config = {
        method: 'post',
        url: 'https://7315fdfcf7b5.ngrok.io/teacherSignUp/save',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };
        console.log(data);

        axios(config)
        .then(response => {
            if(response.data.status) {
                const sentOtp = parseInt(response.data.data.otp);
                this.setState({otp: sentOtp, step: 2});
            }
            else {
                alert("You're already registered");
                setTimeout(this.props.history.push("/signin"), 2000);
            }
            console.log(response);
        })
        .catch(error => console.log(error));
    };

    sendOtp = () => {
        let nameInp = document.getElementById('name-inp').value;
        let emailInp = document.getElementById('email-inp').value;
        let phoneInp = document.getElementById('phone-inp').value;     
        this.updateState(nameInp, emailInp, phoneInp);
        this.saveUserData(nameInp, emailInp, phoneInp);
    }

    OTPSuccess = () => {
        this.setState({
            step: 3
        })
    }

    setPassword = () => {
        const {setCurrentUser} = this.props;
        
        const passwordInp = document.getElementById('password-inp').value;
        let data = {
            email_id : this.state.email,
            password : passwordInp
        }
        let user = {
            email : this.state.email
        }
        let config = {
            method: 'post',
            url: 'https://7315fdfcf7b5.ngrok.io/teacherSignUp/savePassword',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        axios(config)
        .then(response => {
            if(response.data.status) {
                setCurrentUser(user);
                this.props.history.push('/onboard');
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        const {step} = this.state;

        switch(step) {
            case 1: 
                return (
                    <div className="sign-up-container">
                        <Header></Header>
                        <SignUpDetails 
                            handleSubmit={this.sendOtp} 
                            validationError={this.validationError} 
                            removeErrors={this.removeErrors} 
                            disableBtn={this.disableBtn} 
                            enableBtn={this.enableBtn}>
                        </SignUpDetails>
                    </div>
                );
            case 2: 
                return (
                    <div className="sign-up-container">
                        <Header></Header>
                        <OTPForm 
                            step={this.state.step} 
                            otp={this.state.otp} 
                            OTPSuccess={this.OTPSuccess} 
                            validationError={this.validationError} 
                            removeErrors={this.removeErrors} 
                            disableBtn={this.disableBtn} 
                            enableBtn={this.enableBtn}>
                        </OTPForm>
                    </div>
                );
            case 3: 
                return (
                    <div className="sign-up-container">
                        <Header></Header>
                        <SetPasswordForm 
                            email = {this.state.email}
                            handleSubmit={this.setPassword}
                            validationError={this.validationError} 
                            removeErrors={this.removeErrors} 
                            disableBtn={this.disableBtn} 
                            enableBtn={this.enableBtn}>
                        </SetPasswordForm>
                    </div>
                );
        }   
    }
}


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    null,
    mapDispatchToProps
)(SignUpPage);