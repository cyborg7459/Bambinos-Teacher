import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import {connect} from 'react-redux';

import Loader from '../loader/loader.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {FormLabel, StyledForm, PersonalImage, FormContent, IndividualFormContainer} from '../../pages/onboarding/onboarding.style';

class PersonalDetails extends React.Component {

    state = {
        isLoading : false
    }

    personalDetailsValidation = () => {

        const {removeErrors, validationError} = this.props;

        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const country = document.getElementById('country');
        const bio = document.getElementById('bio');

        removeErrors(city);
        removeErrors(state);
        removeErrors(country);
        removeErrors(bio);
        
        if(city.value!=="" && state.value!=="" && country.value!=="" && bio.value!=="" )
            return true;
        else if(city.value === "")
            validationError(city, "Please enter city name");
        else if(state.value ==="")
            validationError(state, "Please enter state name");
        else if(country.value==="")
            validationError(country, "Please enter country name");
        else if(bio.value==="")
            validationError(bio, "Please enter your bio");

        return false;
    }

    savePersonalDetails = () => {
        if(this.personalDetailsValidation())
        {

            this.setState(
                {isLoading: true}
            );
            
            let data = {
                email_id: this.props.currentUser.email,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                country: document.getElementById('country').value,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
                bio_desc: document.getElementById('bio').value
            }
    
            console.log(data);
    
            let config = {
                method: 'post',
                url: 'https://teacher-signup.bambinos.in:8443/Teacher/teacherSignUp/saveLocation',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };
    
            axios(config)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        }      
    }

    render() {
        return (
            <IndividualFormContainer>
                {
                    this.state.isLoading ? <Loader text='Saving personal details'></Loader> : null
                }
                <StyledForm id="personal">
                    <Row>
                        <Col lg={4} className="pl-0 order-1 order-lg-2">
                            <PersonalImage></PersonalImage>
                        </Col>
                        <Col lg={8} className="order-2 order-lg-1">
                            <FormContent>
                                <h1 className="display-4">Tell Us About Yourself</h1>
                                <hr className="mb-4" />
                                <Row className="mt-4">
                                    <Col md={4}>
                                        <Form.Group> 
                                            <FormLabel>City</FormLabel>
                                            <Form.Control 
                                                required 
                                                id="city" 
                                                type="text"
                                                placeholder="Enter your city's name"/>
                                            <Form.Text className="text-danger"/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <FormLabel>State</FormLabel>
                                            <Form.Control
                                                required
                                                id="state" 
                                                type="text"
                                                placeholder="Enter your state name"/>
                                            <Form.Text className="text-danger"/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <FormLabel>Country</FormLabel>
                                            <Form.Control 
                                                required 
                                                id="country" 
                                                type="text"
                                                placeholder="Enter country name"/>
                                            <Form.Text className="text-danger"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* <div class="form-group mb-2 mt-3">
                                    <label class="lead mr-3">Upload Photo : </label>
                                    <input required type="file" name="photo" />
                                </div> */}
                                <Form.Group>
                                    <FormLabel>Bio</FormLabel>
                                    <br />
                                    <Form.Control
                                        as="textarea" 
                                        required 
                                        placeholder="Give a brief description about yourself" id="bio"/>
                                    <Form.Text className="text-danger"/>
                                </Form.Group>
                                <Button  
                                    variant="outline-primary"
                                    block
                                    id="personal-detail-save-btn"
                                    className="mt-5"
                                    onClick={this.savePersonalDetails}>
                                        Submit & Proceed
                                </Button>
                            </FormContent>
                        </Col>
                    </Row>
                </StyledForm>
            </IndividualFormContainer>           
        )
    }
}

const mapStateToProps = state => ({
    currentUser : selectCurrentUser(state)
})

export default connect(mapStateToProps)(PersonalDetails);