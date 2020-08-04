import styled, {css} from 'styled-components';

const imageRegion = css`
    height: 100%;
    min-height: 300px;
    background-size: cover!important;
    background-repeat: no-repeat;
    overflow: hidden;
`

export const OnboardingContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(235, 245, 247,0.5);

    hr {
        background-color: #fff;
    }

    .display-4 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    textarea
    {
        height: 150px!important;
    }
`

export const FormContainer = styled.div`
    width : calc(100% - 70px);
    height : 100%!important;
    margin-left : 70px;
    position : relative;

    @media(max-width :1200px)
    {
        width : 100%;
        margin-left : 0px;
    }
`

export const SidebarToggler = styled.button`
    position : absolute;
    top : 20px;
    left : 20px;
    display : none;

    @media (max-width : 1200px)
    {
        display : block;
    }
`

export const FormRegion = styled.div`
    padding: 100px 0px;
    width : 80%;
    margin-left : 8%;

    @media(max-width: 1200px)
    {
        width:96%;
        margin-left : 2%;
    }
`

export const StyledForm = styled.form`
    background-color : white;
    padding : 0px;
    box-shadow : 0px 2px 10px  rgba(0,0,0,0.6);
    border-radius : 10px;
    margin-bottom : 80px;
`

export const FormLabel = styled.label`
    font-size : 16px;
    font-weight : 200;
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
`
