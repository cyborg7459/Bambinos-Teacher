import React from 'react';

import {LoaderContainer, LoaderContent, LoaderCirclesContainer, LoaderCircle} from './loader.style';

const Loader = ({text}) => {
    return (
        <LoaderContainer>
            <LoaderContent>
                <h2>{text}</h2>
                <LoaderCirclesContainer>
                    <LoaderCircle></LoaderCircle>
                    <LoaderCircle></LoaderCircle>
                    <LoaderCircle></LoaderCircle>
                </LoaderCirclesContainer>
            </LoaderContent>            
        </LoaderContainer>
    )
}

export default Loader;