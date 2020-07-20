import React, { useState } from 'react';
import APIManager from "../Modules/APIManager";
import { Form, Button } from "react-bootstrap";
import "./ArticleForm.css";

const ArticleForm = props => {
    const [article, setArticle] = useState({ userId:parseInt(sessionStorage.activeUserID), title:"", synopsis:"", url:""})

    const clearInputs = () => {
        document.getElementById("title").value= ""
        document.getElementById("synopsis").value= ""
        document.getElementById("url").value= ""
    }

    const handleFieldChange = evt => {
        const stateToChange = { ...article };
        stateToChange[evt.target.id] = evt.target.value;
        setArticle(stateToChange)
    }

    const ConstructNewArticle = evt => {
        evt.preventDefault();
        if (article.title === "" || article.synopsis === "" || article.url === "") {
            alert("Please complete all fields.")
        } else {
            return APIManager.Push("News", article)
            .then(() => APIManager.GetAll("News").then(setArticle))
            clearInputs()
        }    
    };

    return (
        <Form>
  <Form.Group controlId="title">
    <Form.Label>Title</Form.Label>
    <Form.Control 
              required
              onChange={handleFieldChange} 
              type="text" 
              placeholder="Enter title" />
  </Form.Group>
  <Form.Group controlId="synopsis">
    <Form.Label>Synopsis</Form.Label>
    <Form.Control
            required
            onChange={handleFieldChange} 
            type="text" 
            placeholder="Enter synopsis" />
  </Form.Group>
  <Form.Group controlId="url">
    <Form.Label>Article Link</Form.Label>
    <Form.Control 
            required
            onChange={handleFieldChange}
            type="text" 
            placeholder="Enter article link" />
  </Form.Group>
  <Button 
            className="ArticleFormButton" 
            variant="custom" 
            onClick={ConstructNewArticle}
            type="submit"
  >
    Submit
  </Button>
</Form>

    )
}

export default ArticleForm
