import React from 'react';
// import './onboarding.style.css';
import Sidebar from '../../components/sidebar/sidebar.component';
import {Row, Col} from 'react-bootstrap';

import {OnboardingContainer, FormContainer, SidebarToggler, FormRegion, StyledForm, PersonalImage, FormContent, WorkImage, ProfileImage} from './onboarding.style';

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
    
    render() {
        return (
            <OnboardingContainer id="content">
                <Sidebar></Sidebar>
                <FormContainer id="form-container">
                    <SidebarToggler id="sidebar-toggle-btn" className="btn btn-outline-info">Menu</SidebarToggler>
                    <FormRegion id="form-region">
                        <StyledForm action="/" method="#" id="personal">
                            <Row>
                                <Col lg={4} className="order-1 order-lg-2">
                                    <PersonalImage></PersonalImage>
                                </Col>
                                <Col lg={8} className="order-2 order-lg-1">
                                    <FormContent className="py-5 px-3 px-md-4">
                                        <h1 class="display-4">Tell Us About Yourself</h1>
                                        <hr class="mb-4" />
                                        <div class="form-group mb-3">
                                            <label class="lead">Name</label>
                                            <input readOnly type="text" placeholder="Name from the database" class="form-control form-control-lg" />
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-md-4">
                                                <div class="form-group mb-3"> 
                                                    <label class="lead">City</label>
                                                    <input required class="form-control" name="city" type="text"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3">
                                                    <label class="lead">State</label>
                                                    <input required class="form-control" name="state" type="text"/>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group mb-3">
                                                    <label class="lead">Country</label>
                                                    <input required class="form-control" name="country" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2 mt-3">
                                            <label class="lead mr-3">Upload Photo : </label>
                                            <input required type="file" name="photo" />
                                        </div>
                                        <div class="form-group mt-4">
                                            <label class="lead">Bio</label>
                                            <br />
                                            <textarea required class="lead form-control mt-0" placeholder="Give a brief description about yourself" name="bio"></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-outline btn-block btn-lg mt-5 btn-outline-primary">Submit & Proceed</button>
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
                                        <div class="form-group mb-3">
                                            <label class="lead">Select your Qualification</label>
                                            <select class="form-control form-control-lg" required  name="qualification">
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
                                            </select>
                                        </div>
                                        <div class="form-group mb-3">
                                            <label class="lead">Course Name</label>
                                            <input type="text" placeholder="Enter a name for your course" name="coursename" required class="form-control form-control-lg" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label class="lead">Course Category</label>
                                            <input name="coursecategory" required placeholder="Enter a category which best suits your course content" type="text" class="form-control form-control-lg" />
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="lead">What is your role</label>
                                                    <div class="form-check">
                                                        <input type="radio" name="role" id="role1" value="individual" />
                                                        <label class="lead ml-3 radio-opt" for="exampleRadios1">
                                                        Individual
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="role" id="role2" value="organisation" />
                                                        <label class="lead ml-3 radio-opt" for="exampleRadios2">
                                                        Organisation
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="lead">Prior teaching experience</label>
                                                    <div class="form-check">
                                                        <input type="radio" name="teachingXp" id="teachingXp1" value="formalperson" />
                                                        <label class="lead ml-3 radio-opt">
                                                        In person, formal
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="teachingXp" id="teachingXp2" value="informalperson" />
                                                        <label class="lead ml-3 radio-opt">
                                                        In person, informal
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="teachingXp" id="teachingXp3" value="online" />
                                                        <label class="lead ml-3 radio-opt">
                                                        Online
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input type="radio" name="teachingXp" id="teachingXp4" value="none" />
                                                        <label class="lead ml-3 radio-opt">
                                                        None
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="lead">Teaching Experience</label>
                                            <textarea class="lead mt-0" placeholder="Tell us about your teaching experience, if any, in not about 100 words" className="form-control" name="teachingexp" required></textarea>
                                        </div>
                                        <div class="form-group mb-4">
                                            <label class="lead">Teaching Sample</label>
                                            <input name="samplelink" required type="text"c placeholder="Give drive link or YouTube URL for your 2.5-minute teaching sample" class="form-control form-control-lg" />
                                        </div>
                                        <a href="#profile" id="work-submit" class="continue-btn btn btn-outline btn-block btn-lg mt-5 btn-outline-primary">Submit and Proceed</a>
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
                                        <div class="form-group mb-3">
                                            <label class="lead">Headline</label>
                                            <input type="text" required name="headline" placeholder="Enter a headline for your profile" class="form-control form-control-lg" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label class="lead">Website</label>
                                            <input type="text" name="website" placeholder="Enter your website URL" class="form-control form-control-lg" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label class="lead">LinkedIn Profile URL</label>
                                            <input type="text" name="linkedinId" placeholder="https://www.linkedin.com" class="form-control form-control-lg" />
                                        </div>
                                        <button type="submit" class="btn btn-outline btn-block btn-lg mt-5 btn-outline-primary">Submit</button>
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

export default OnboardingPage;

