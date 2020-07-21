import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import APIManager from '../Modules/APIManager';
import ArticleCard from './ArticleCard';
import ArticleForm from './ArticleForm'
import "./ArticleList.css"

const ArticleList =(props) => {
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({ userId:parseInt(sessionStorage.activeUserID), title:"", synopsis:"", url:"", date: Date.now(), user: sessionStorage.activeUser})
    const getArticles = () => {
        return APIManager.GetAllSort("News").then(articlesFromAPI =>{
            setArticles(articlesFromAPI)
        });
    };
    
    const deleteArticle = id => {
        APIManager.Delete("News", id)
        .then(()=> APIManager.GetAllSort("News").then((response) => setArticles(response)))
    };

    const clearInputs = () => {
        document.getElementById("title").value= ""
        document.getElementById("synopsis").value= ""
        document.getElementById("url").value= ""
    }

    const ConstructNewArticle = article => {
        
        if (article.title === "" || article.synopsis === "" || article.url === "") {
            alert("Please complete all fields.")
        } else {
            APIManager.Push("News", article)
            .then(() => APIManager.GetAllSort("News")).then(() => getArticles());
            clearInputs();

        } 
    }

    useEffect(() => {
        getArticles()
      
    }, [])
    return (
       
            <Container className="ArticleListContainer">
            {/* Changeable dashboard in this  Col */}
            <Row className="articledashboard">
                <ArticleForm
                construct={ConstructNewArticle} />
                
            </Row>
            <Row className="dashboardArticleCard">
               {articles.map(article => <ArticleCard
               key={article.id}
               news={article}
               deleteArticle={deleteArticle}
               
               {...props} />)}
               
            </Row>
            </Container>

        
    )
}

export default ArticleList