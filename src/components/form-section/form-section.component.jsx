import React from 'react';
import './form-section.style.css';
import {Row, Col} from 'react-bootstrap';

const FormSection = (props) => {
    return (
        <div id={props.id} className="form-section">
            <Row className='form-container'>
                <Col xl={4} className="section-img" id={props.img_id}></Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default FormSection;