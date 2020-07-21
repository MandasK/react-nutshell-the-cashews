import React, { useState } from 'react';
import APIManager from "../Modules/APIManager";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./ArticleForm.css";

const ArticleForm = props => {
    const [article, setArticle] = useState({ userId:parseInt(sessionStorage.activeUserID), title:"", synopsis:"", url:"", date: Date.now(), user: sessionStorage.activeUser})
    let money=props.construct;

    const handleFieldChange = evt => {
        const stateToChange = { ...article };
        stateToChange[evt.target.id] = evt.target.value;
        setArticle(stateToChange)
    }

    const ConstructNewsArticle = () => {
        money(article)
    }
       
    

    return (
        <Form className="articleFormContainer">
<Row className="articleFormRow">
    <Col className="articleFormCol">
  <Form.Group className="articleFormGrp" controlId="title">
    <Form.Label className="articleFormLbl">Title</Form.Label>
    <Form.Control
              className="articleFormCtl"
              onChange={handleFieldChange} 
              type="text" 
              placeholder="Enter title" />
  </Form.Group>
  </Col>
  <Col className="articleFormCol">
  <Form.Group className="articleFormGrp" controlId="synopsis">
    <Form.Label className="articleFormLbl">Synopsis</Form.Label>
    <Form.Control
            className="articleFormCtl"
            onChange={handleFieldChange} 
            type="text" 
            placeholder="Enter synopsis" />
  </Form.Group>
  </Col>
  <Col className="articleFormCol">
  <Form.Group className="articleFormGrp" controlId="url">
    <Form.Label className="articleFormLbl">Article Link</Form.Label>
    <Form.Control 
            className="articleFormCtl"
            onChange={handleFieldChange}
            type="text" 
            placeholder="Enter article link" />
  </Form.Group>
  </Col>
  </Row>
  <Button 
            className="ArticleFormButton" 
            variant="custom" 
            onClick={ConstructNewsArticle}
            type="submit"
  >
    Submit
  </Button>
</Form>

    )
}

export default ArticleForm
