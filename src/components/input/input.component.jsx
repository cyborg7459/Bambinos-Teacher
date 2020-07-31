import React from 'react';
import {Form} from 'react-bootstrap';
import './input.style.css';

const InputGroup = (props) => (
    <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control onChange={props.handleChange} id={props.id} type={props.type} placeholder={props.placeholder} {...props} />
        <Form.Text className="text-danger"></Form.Text>
    </Form.Group>
);

export default InputGroup;