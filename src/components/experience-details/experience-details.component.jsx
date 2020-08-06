import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import {connect} from 'react-redux';

import Loader from '../loader/loader.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {StyledForm, FormLabel, FormContent, WorkImage, IndividualFormContainer} from '../../pages/onboarding/onboarding.style';

class ExperienceDetails extends React.Component {

    state = {
        isLoading : false
    }

    validateWorkExperience = (role, exp) => {

        const {removeErrors, validationError} = this.props;

        let qualification = document.getElementById('qualification');
        let courseName = document.getElementById('course-name');
        let courseCategory = document.getElementById('course-category');
        let teacherSample = document.getElementById('sample-link');
        let teachingExp = document.getElementById('teaching-exp');

        removeErrors(qualification);
        removeErrors(courseName);
        removeErrors(courseCategory);
        removeErrors(teacherSample);
        removeErrors(teachingExp);
        document.getElementById('role-error').innerHTML = "";
        document.getElementById('exp-error').innerHTML = "";

        if(qualification.value === "")
            validationError(qualification, "Please select a qualification");
        else if(courseName.value === "")
            validationError(courseName, "Please enter a name for your course");
        else if(courseCategory.value === "")
            validationError(courseCategory, "Please enter a category for your course");
        else if(role === "")
            document.getElementById('role-error').innerHTML = "Please select any one of these options";
        else if(exp === "")
            document.getElementById('exp-error').innerHTML = "Please select any one of these options";
        else if(teachingExp.value === "")
            validationError(teachingExp, "Please describe your teaching experience");
        else if(teacherSample.value === "")
            validationError(teacherSample, "Please provide with your teaching sample");
        else if(this.validateTeachingLink(teacherSample.value.trim()))
            validationError(teacherSample, "Please provide a valid link in the format http://www.abc.com or https://www.abc.com");
        else 
            return true;

        return false;
    }

    validateTeachingLink = (link) => {
        const RE = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        if(!RE.test(link))
            return true;
        else 
            return false;
    }

    saveWorkExperience = () => {        
        const roleOptions = document.querySelectorAll('.role-option');
        const expOptions = document.querySelectorAll('.exp-option');

        let expSelected = '';
        let roleSelected = '';

        roleOptions.forEach(option => {
            if(option.checked) {
                roleSelected = option.getAttribute('value');
            }
        });
        expOptions.forEach(option => {
            if(option.checked) {
                expSelected = option.getAttribute('value');
            }
        });

        if(this.validateWorkExperience(roleSelected, expSelected)) {

            this.setState(
                {isLoading: true}
            );
            
            let data = {
                email_id: this.props.currentUser.email,
                qualification: document.querySelectorAll('#qualification option')[document.getElementById('qualification').selectedIndex].getAttribute('value'),
                course_name: document.getElementById('course-name').value,
                course_category: document.getElementById('course-category').value,
                teacher_sample_link: document.getElementById('sample-link').value,
                experience: document.getElementById('teaching-exp').value,
                role: roleSelected,
                prior_teaching: expSelected
            }
    
            console.log(data);
    
            let config = {
                method: 'post',
                url: 'https://teacher-signup.bambinos.in:8443/Teacher/teacherSignUp/saveTeachingExp',
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
                    this.state.isLoading ? <Loader text='Saving work experience'></Loader> : null
                }
                <StyledForm id="experience">
                    <Row>
                        <Col lg={4}>
                            <WorkImage></WorkImage>
                        </Col>
                        <Col lg={8}>
                            <FormContent>
                                <h1 className="display-4">Work & Experience</h1>
                                <hr className="mb-4" />
                                <Form.Group>
                                    <FormLabel>Select your Qualification</FormLabel>
                                    <Form.Control as="select" required  id="qualification">
                                        <option value="">Select a qualification</option>
                                        <option value="PhD">PhD</option>
                                        <option value="Master Degree">Master Degree</option>
                                        <option value="Bachelors Degree">Bachelors Degree</option>
                                        <option value="Early Childhood Teacher">Early Childhood Teacher</option>
                                        <option value="Advanced Diploma">Advanced Diploma</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Certificate 3">Certificate 3</option>
                                        <option value="Working Towards">Working Towards</option>
                                        <option value="Trainee">Trainee</option>
                                    </Form.Control>
                                    <p className="mt-2 text-danger"></p>
                                </Form.Group>
                                <Form.Group>
                                    <FormLabel>Course Name</FormLabel>
                                    <Form.Control
                                        type="text" 
                                        id="course-name" 
                                        placeholder="Enter a name for your course" 
                                        required 
                                    />
                                    <p className="mt-2 text-danger"></p>
                                </Form.Group>
                                <Form.Group>
                                    <FormLabel>Course Category</FormLabel>
                                    <Form.Control 
                                        type="text"
                                        id="course-category" 
                                        placeholder="Enter a category which best suits your course content" 
                                        required 
                                    />
                                    <p className="mt-2 text-danger"></p>
                                </Form.Group>
                                <Row className="mt-4">
                                    <Col md={6}>
                                        <Form.Group>
                                            <FormLabel>What is your role</FormLabel>
                                            <Form.Check>
                                                <input 
                                                    className = "role-option"
                                                    type="radio" 
                                                    name="role" 
                                                    value="Individual" />
                                                <FormLabel className="ml-3">
                                                Individual
                                                </FormLabel>
                                            </Form.Check>
                                            <Form.Check>
                                                <input 
                                                    className = "role-option"
                                                    type="radio" 
                                                    name="role" 
                                                    value="Organisation" />
                                                <FormLabel className="ml-3">
                                                Organisation
                                                </FormLabel>
                                            </Form.Check>
                                            <p id="role-error" className="mt-2 text-danger"></p>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <FormLabel>Prior teaching experience</FormLabel>
                                            <Form.Check>
                                                <input 
                                                    className = "exp-option"
                                                    type="radio" 
                                                    name="teachingXp" 
                                                    value="In person, formal" />
                                                <FormLabel className="ml-3"> In person, formal </FormLabel>
                                            </Form.Check>
                                            <Form.Check>
                                                <input 
                                                    className = "exp-option"
                                                    type="radio" 
                                                    name="teachingXp"  
                                                    value="In person, informal" />
                                                <FormLabel className="ml-3"> In person, informal </FormLabel>
                                            </Form.Check>
                                            <Form.Check>
                                                <input 
                                                    className = "exp-option"
                                                    type="radio" 
                                                    name="teachingXp"  
                                                    value="Online" />
                                                <FormLabel className="ml-3"> Online </FormLabel>
                                            </Form.Check>
                                            <Form.Check>
                                                <input 
                                                    className = "exp-option"
                                                    type="radio" 
                                                    name="teachingXp"  
                                                    value="None" />
                                                <FormLabel className="ml-3"> None </FormLabel>
                                            </Form.Check>
                                            <p id="exp-error" className="mt-2 text-danger"></p>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    <FormLabel>Teaching Experience</FormLabel>
                                    <Form.Control
                                        as="textarea" 
                                        placeholder="Tell us about your teaching experience, if any, in not about 100 words" 
                                        id="teaching-exp" 
                                        required>
                                    </Form.Control>
                                    <p className="mt-2 text-danger"></p>
                                </Form.Group>
                                <Form.Group>
                                    <FormLabel>Teaching Sample</FormLabel>
                                    <Form.Control
                                        type="text" 
                                        id="sample-link" 
                                        placeholder="Give drive link or YouTube URL for your 2.5-minute teaching sample" 
                                        required 
                                    />
                                    <p className="mt-2 text-danger"></p>
                                </Form.Group>
                                <Button  
                                    variant="outline-primary"
                                    block
                                    className="mt-5"
                                    onClick={this.saveWorkExperience}>
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
    currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(ExperienceDetails);