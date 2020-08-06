import React from 'react';
import axios from 'axios';
import './sign-up.style.css';
import {connect} from 'react-redux';

import Loader from '../../components/loader/loader.component';
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
        phone: '',
        isLoading: false
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

    loadingStart = () => {
        this.setState({
            isLoading : true
        })
    }

    loadingEnd = () => {
        this.setState({
            isLoading : false
        })
    }

    stepChange = num => {
        this.setState({
            step: num
        })
    }

    setOTP = num => {
        this.setState({
            otp: num
        })
    }

    // setPassword = () => {
    //     const {setCurrentUser} = this.props;
        
    //     const passwordInp = document.getElementById('password-inp').value;
    //     let data = {
    //         email_id : this.state.email,
    //         password : passwordInp
    //     }
    //     let user = {
    //         email : this.state.email
    //     }
    //     let config = {
    //         method: 'post',
    //         url: 'https://teacher-signup.bambinos.in:8443/Teacher/teacherSignUp/savePassword',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         data : data
    //     };
        
    //     axios(config)
    //     .then(response => {
    //         if(response.data.status) {
    //             setCurrentUser(user);
    //             this.props.history.push('/onboard');
    //         }
    //     })
    //     .catch(error => console.log(error));
    // }

    render() {
        const {step} = this.state;

        switch(step) {
            case 1: 
                return (
                    <div className="sign-up-container">
                        {
                            this.state.isLoading ? <Loader text="Sending OTP"></Loader> : null
                        }
                        <Header></Header>
                        <SignUpDetails 
                            setOTP={this.setOTP}
                            stepChange={this.stepChange}
                            updateState={this.updateState}
                            loadingStart={this.loadingStart}
                            loadingEnd={this.loadingEnd}
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
                            stepChange={this.stepChange}
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
                        {
                            this.state.isLoading ? <Loader text="Setting your password"></Loader> : null
                        }
                        <SetPasswordForm 
                            loadingStart={this.loadingStart}
                            loadingEnd={this.loadingEnd}
                            email = {this.state.email}
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