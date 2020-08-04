import React from 'react';
import Sidebar from '../../components/sidebar/sidebar.component';
import {Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {connect} from 'react-redux';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {
    OnboardingContainer,
    FormContainer, 
    SidebarToggler, 
    FormRegion, 
    StyledForm,
    PersonalImage, 
    FormContent, 
    WorkImage, 
    ProfileImage,
    FormLabel
} from './onboarding.style';

class OnboardingPage extends React.Component {

    componentDidMount() {
        let sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
        let menuItem = document.querySelectorAll('.sidebar-menu-item');
        let sidebar = document.getElementById('sidebar');
        let formContainer = document.getElementById('form-container');
        // let sidebarInner = document.getElementById('sidebar-inner');

        sidebar.addEventListener('mouseenter', () => {
            sidebar.classList.add('visible');
            sidebar.classList.remove('hidden');
            setTimeout( () => {
                sidebar.classList.add('content-show');
            }, 200);
            sidebar.classList.remove('content-hide');
        })

        sidebar.addEventListener('mouseleave', () => {
            sidebar.classList.remove('visible');
            sidebar.classList.add('hidden');
            sidebar.classList.remove('content-show');
            sidebar.classList.add('content-hide');
        })

        menuItem.forEach(item => {
            item.addEventListener('click', ()=>{
                item.firstElementChild.nextElementSibling.click();
            })
        })

        formContainer.addEventListener('click', ()=> {
            sidebar.classList.remove('visible');
            sidebar.classList.add('sm-hidden');
        })

        sidebarToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.add('visible');
            sidebar.classList.remove('sm-hidden');
        })
    }

    savePersonalDetails = () => {
        const cityName = document.getElementById('city').value;
        const stateName = document.getElementById('state').value;
        const countryName = document.getElementById('country').value;
        const bioDesc = document.getElementById('bio').value;

        let data = {
            email_id: this.props.currentUser.email,
            city: cityName,
            state: stateName,
            country: countryName,
            image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
            bio_desc: bioDesc
        }

        console.log(data);

        let config = {
            method: 'post',
            url: 'https://7315fdfcf7b5.ngrok.io/teacherSignUp/saveLocation',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
    
    render() {
        return (
            <OnboardingContainer id="content">
                <Sidebar></Sidebar>
                <FormContainer id="form-container">
                    <SidebarToggler id="sidebar-toggle-btn" className="btn btn-outline-info">Menu</SidebarToggler>
                    <FormRegion id="form-region">
                        <StyledForm id="personal">
                            <Row>
                                <Col lg={4} className="order-1 order-lg-2">
                                    <PersonalImage></PersonalImage>
                                </Col>
                                <Col lg={8} className="order-2 order-lg-1">
                                    <FormContent className="py-5 px-3 px-md-4">
                                        <h1 class="display-4">Tell Us About Yourself</h1>
                                        <hr class="mb-4" />
                                        <Row className="mt-4">
                                            <Col md={4}>
                                                <Form.Group> 
                                                    <FormLabel class="lead">City</FormLabel>
                                                    <Form.Control 
                                                        required 
                                                        id="city" 
                                                        type="text"
                                                        placeholder="Enter your city's name"/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group>
                                                    <FormLabel class="lead">State</FormLabel>
                                                    <Form.Control
                                                        required
                                                        id="state" 
                                                        type="text"
                                                        placeholder="Enter your state name"/>
                                                </Form.Group>
                                            </Col>
                                            <Col md={4}>
                                                <Form.Group>
                                                    <FormLabel class="lead">Country</FormLabel>
                                                    <Form.Control 
                                                        required 
                                                        id="country" 
                                                        type="text"
                                                        placeholder="Enter country name"/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        {/* <div class="form-group mb-2 mt-3">
                                            <label class="lead mr-3">Upload Photo : </label>
                                            <input required type="file" name="photo" />
                                        </div> */}
                                        <div class="form-group mt-4">
                                            <FormLabel class="lead">Bio</FormLabel>
                                            <br />
                                            <Form.Control
                                                as="textarea" 
                                                required 
                                                class="lead form-control mt-0" 
                                                placeholder="Give a brief description about yourself" id="bio">
                                            </Form.Control>
                                        </div>
                                        <Button  
                                            variant="outline-primary"
                                            block
                                            className="mt-5"
                                            onClick={this.savePersonalDetails}>
                                                Submit & Proceed
                                        </Button>
                                    </FormContent>
                                </Col>
                            </Row>
                        </StyledForm>
                        <StyledForm action="/" method="#" id="work">
                            <Row>
                                <Col lg={4}>
                                    <WorkImage></WorkImage>
                                </Col>
                                <Col lg="8">
                                    <FormContent className="py-5 px-3 px-md-4">
                                        <h1 class="display-4">Work & Experience</h1>
                                        <hr class="mb-4" />
                                        <Form.Group>
                                            <FormLabel class="lead">Select your Qualification</FormLabel>
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
                                        </Form.Group>
                                        <Form.Group>
                                            <FormLabel class="lead">Course Name</FormLabel>
                                            <Form.Control
                                                type="text" 
                                                id="coursename" 
                                                placeholder="Enter a name for your course" 
                                                required 
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <FormLabel class="lead">Course Category</FormLabel>
                                            <Form.Control 
                                                type="text"
                                                id="coursecategory" 
                                                placeholder="Enter a category which best suits your course content" 
                                                required 
                                            />
                                        </Form.Group>
                                        <Row className="mt-4">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <FormLabel>What is your role</FormLabel>
                                                    <Form.Check>
                                                        <input 
                                                            type="radio" 
                                                            name="role" 
                                                            value="individual" />
                                                        <FormLabel className="ml-3">
                                                        Individual
                                                        </FormLabel>
                                                    </Form.Check>
                                                    <Form.Check>
                                                        <input 
                                                            type="radio" 
                                                            name="role" 
                                                            value="organisation" />
                                                        <FormLabel className="ml-3">
                                                        Organisation
                                                        </FormLabel>
                                                    </Form.Check>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <FormLabel>Prior teaching experience</FormLabel>
                                                    <Form.Check>
                                                        <input 
                                                            type="radio" 
                                                            name="teachingXp" 
                                                            value="formalperson" />
                                                        <FormLabel className="ml-3">
                                                        In person, formal
                                                        </FormLabel>
                                                    </Form.Check>
                                                    <Form.Check>
                                                        <input 
                                                            type="radio" 
                                                            name="teachingXp"  
                                                            value="informalperson" />
                                                        <FormLabel className="ml-3"> In person, informal </FormLabel>
                                                    </Form.Check>
                                                    <Form.Check>
                                                        <input 
                                                            type="radio" 
                                                            name="teachingXp"  
                                                            value="online" />
                                                        <FormLabel className="ml-3"> Online </FormLabel>
                                                    </Form.Check>
                                                    <Form.Check>
                                                        <input 
                                                            type="radio" 
                                                            name="teachingXp"  
                                                            value="none" />
                                                        <FormLabel className="ml-3"> None </FormLabel>
                                                    </Form.Check>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group>
                                            <FormLabel>Teaching Experience</FormLabel>
                                            <Form.Control
                                                as="textarea" 
                                                placeholder="Tell us about your teaching experience, if any, in not about 100 words" 
                                                id="teachingexp" 
                                                required>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <FormLabel>Teaching Sample</FormLabel>
                                            <Form.Control
                                                type="text" 
                                                id="samplelink" 
                                                placeholder="Give drive link or YouTube URL for your 2.5-minute teaching sample" 
                                                required 
                                            />
                                        </Form.Group>
                                        <Button  
                                            variant="outline-primary"
                                            block
                                            className="mt-5">
                                                Submit & Proceed
                                        </Button>
                                    </FormContent>
                                </Col>
                            </Row>
                        </StyledForm>
                        <StyledForm action="/" method="#" id="profile">
                            <Row>
                                <Col lg={4} className="order-1 order-lg-2">
                                    <ProfileImage></ProfileImage>
                                </Col>
                                <Col lg={8} className="order-2 order-lg-1">
                                    <FormContent className="py-5 px-3 px-md-4">
                                        <h1 class="display-4">Profile Info</h1>
                                        <hr class="mb-4" />
                                        <Form.Group>
                                            <FormLabel>Headline</FormLabel>
                                            <Form.Control
                                                type="text" 
                                                required 
                                                id="headline" 
                                                placeholder="Enter a headline for your profile" 
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <FormLabel>Website</FormLabel>
                                            <Form.Control
                                                type="text" 
                                                id="website" 
                                                placeholder="Enter your website URL"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <FormLabel>LinkedIn Profile URL</FormLabel>
                                            <Form.Control
                                                type="text"
                                                id="linkedinId" 
                                                placeholder="https://www.linkedin.com" 
                                            />
                                        </Form.Group>
                                            <Button  
                                                variant="outline-primary"
                                                block
                                                className="mt-5">
                                                    Submit & Proceed
                                            </Button>
                                    </FormContent>
                                </Col>
                            </Row>
                        </StyledForm>
                    </FormRegion>
                </FormContainer>
            </OnboardingContainer>   
        )
    }  
}

const MapStateToProps = state => ({
    currentUser : selectCurrentUser(state)
})


export default connect(MapStateToProps)(OnboardingPage);

