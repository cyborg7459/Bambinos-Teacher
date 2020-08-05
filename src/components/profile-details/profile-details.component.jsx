import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import {connect} from 'react-redux';

import Loader from '../loader/loader.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {FormContent, FormLabel, StyledForm, ProfileImage, IndividualFormContainer} from '../../pages/onboarding/onboarding.style';

class ProfileDetails extends React.Component {

    state = {
        isLoading : false
    }
    
    validateProfileDetails = () => {

        const headline = document.getElementById('headline');
        
        const {removeErrors, validationError} = this.props;
        removeErrors(headline);

        if(headline.value==="")
            validationError(headline, "Please enter a headline for your profile");
        else 
            return true;
        return false;
    }

    saveProfileData = () => {

        if(this.validateProfileDetails()) {
            
            this.setState(
                {isLoading: true}
            );
            
            const data = {
                email_id: this.props.currentUser.email,
                headline: document.getElementById('headline').value,
                website: document.getElementById('website').value,
                linkedin_url: document.getElementById('linkedin-url').value
            }
            
            console.log(data);
    
            let config = {
                method: 'post',
                url: 'https://104.244.122.252:8080/Teacher/teacherSignUp/saveTeachingSocial',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };
    
            // axios(config)
            // .then(response => console.log(response))
            // .catch(error => console.log(error));
        }  
    }

    render() {
        return (
            <IndividualFormContainer>
                {
                    this.state.isLoading ? <Loader text='Saving profile details'></Loader> : null
                }
                <StyledForm id="profile">
                    <Row>
                        <Col lg={4} className="pl-0 order-1 order-lg-2">
                            <ProfileImage></ProfileImage>
                        </Col>
                        <Col lg={8} className="order-2 order-lg-1">
                            <FormContent>
                                <h1 className="display-4">Profile Info</h1>
                                <hr className="mb-4" />
                                <Form.Group>
                                    <FormLabel>Headline</FormLabel>
                                    <Form.Control
                                        type="text" 
                                        required 
                                        id="headline" 
                                        placeholder="Enter a headline for your profile" 
                                    />
                                    <p className="mt-2 text-danger"></p>
                                </Form.Group>
                                <Form.Group>
                                    <FormLabel>Website (if any)</FormLabel>
                                    <Form.Control
                                        type="text" 
                                        id="website" 
                                        placeholder="Enter your website URL"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <FormLabel>LinkedIn Profile URL (if any)</FormLabel>
                                    <Form.Control
                                        type="text"
                                        id="linkedin-url" 
                                        placeholder="https://www.linkedin.com" 
                                    />
                                </Form.Group>
                                    <Button  
                                        variant="outline-primary"
                                        block
                                        onClick={this.saveProfileData}
                                        className="mt-5">
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

export default connect(mapStateToProps)(ProfileDetails);