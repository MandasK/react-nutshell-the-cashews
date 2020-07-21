import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./ArticleCard.css"


const ArticleCard = props => {
    return (
        <Container className="articleCardContainer">
        <Card className="articleCard">
        <Card.Body className="articleCardBody">
          <Card.Title className="articleTitle">{props.news.title}</Card.Title>
          <Card.Text className="articleSynopsis">
            {props.news.user}
            <br></br>
            {props.news.synopsis}
          </Card.Text>
    <Card.Link target="_blank" className="articleLink" href={props.news.url}>{props.news.url}</Card.Link>
          <br></br>
          <Button className="articleDeleteButton" variant="custom" onClick={() => props.deleteArticle(props.news.id)}>Remove Article</Button>
        </Card.Body>
        
      </Card>  
        </Container>
    );
};

export default ArticleCard;