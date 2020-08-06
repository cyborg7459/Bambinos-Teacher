import React from 'react';
import {Route} from 'react-router-dom';

import PersonalDetails from '../../components/personal-details/personal-details.component';
import ExperienceDetails from '../../components/experience-details/experience-details.component';
import ProfileDetails from '../../components/profile-details/profile-details.component'; 
import {OnboardingPageContainer} from './onboarding.style';

class OnboardingPage extends React.Component {

    validationError = (target, errorMessage) => {
        target.classList.add('error');
        target.nextElementSibling.innerHTML = `${errorMessage}`;
    }

    removeErrors = (target) => {
        target.classList.remove('error');
        target.nextElementSibling.innerHTML = " ";
    }
    
    render() {
        return (
            <OnboardingPageContainer>
                <h1 className='text-info display-3 text-center'>Welcome onboard at Bambinos.in !!!</h1>
                <h3 className="text-info text-center">Fill in the following details and get started</h3>
                <hr/>
                
                    <Route
                        exact
                        path={`${this.props.match.path}/personal`}
                        render={() => 
                            <PersonalDetails 
                                removeErrors={this.removeErrors}
                                validationError={this.validationError}>
                            </PersonalDetails>
                        }
                    />
                    <Route
                        exact
                        path={`${this.props.match.path}/experience`}
                        render = {() => 
                            <ExperienceDetails
                                removeErrors = {this.removeErrors}
                                validationError = {this.validationError}>
                            </ExperienceDetails>
                        }    
                    />
                    <Route
                        exact
                        path={`${this.props.match.path}/profile`}
                        render = {() => 
                            <ProfileDetails
                                removeErrors = {this.removeErrors}
                                validationError = {this.validationError}>
                            </ProfileDetails>
                        }    
                    />
                     
            </OnboardingPageContainer>
        )
    }
    
}

export default OnboardingPage;