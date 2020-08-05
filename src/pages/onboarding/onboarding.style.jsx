import styled, {css} from 'styled-components';

const imageRegion = css`
    height: 100%;
    min-height: 300px;
    background-size: cover!important;
    background-repeat: no-repeat;
    overflow: hidden;
`

export const OnboardingPageContainer = styled.div`
    height: 100%;
    min-height : 100vh;
    padding : 40px 0px;
    width: 100%;
    background-color: rgba(235, 245, 247,0.5);

    hr {
        background-color: #fff;
        max-width : 1400px;
    }

    .display-4 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    .display-3 {
        font-size : 3.5rem;
    }

    h3 {
        font-weight : 200!important;
    }

    textarea
    {
        height: 150px!important;
    }

    @media(max-width : 700px) {
        .display-3 {
            font-size : 2.5rem;
        }

        h3 {
            font-size : 1.5rem;
        }
    }
`

export const OnboardingFormContainer = styled.div`
    display : block;
`

export const IndividualFormContainer = styled.div`
    display : flex;
    justify-content : center;
    margin-top : 90px;
    width : 100%;
    height : 100%;
    align-items : center;

    @media(max-width : 1200px) {
        margin-top: 50px;
    }
`

export const StyledForm = styled.form`
    overflow : hidden;
    width : 95%;
    max-width : 1400px;
    background-color : white;
    padding : 0px;
    box-shadow : 0px 2px 10px  rgba(0,0,0,0.6);
    border-radius : 10px;
    margin-bottom : 80px;
`

export const FormLabel = styled.label`
    font-size : 16px;
    font-weight :300;
`

export const PersonalImage = styled.div`
    ${imageRegion}
    background: url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80');
`

export const WorkImage = styled.div`
    ${imageRegion}
    background: url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
`

export const ProfileImage = styled.div`
    ${imageRegion}
    background: url('https://images.unsplash.com/photo-1528795259021-d8c86e14354c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80');
`

export const FormContent = styled.div`
    padding : 50px 35px;
    box-sizing : border-box;
    overflow : hidden;

    h1 {
        font-weight : 300!important;
    }

    .lead {
        font-weight : 300;
        font-size : 1.3rem!important;
    }

    label {
        color : #323538;
    }

    @media(max-width : 1200px) {
        padding : 40px 35px;
    }

    @media(max-width : 700px) {
        padding : 40px 15px;
    }

`
