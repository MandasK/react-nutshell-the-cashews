import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import APIManager from '../Modules/APIManager';
import ArticleCard from './ArticleCard';
import ArticleForm from './ArticleForm'

const ArticleList =(props) => {
    const [articles, setArticles] = useState([]);
    const getArticles = () => {
        return APIManager.GetAll("News").then(articlesFromAPI =>{
            setArticles(articlesFromAPI)
        });
    };
    const deleteArticle = id => {
        APIManager.Delete("News", id)
        .then(()=> APIManager.GetAll("News").then(setArticles))
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
       
            <Container>
            {/* Changeable dashboard in this  Col */}
            <Row className="dashboard">
                <ArticleForm />
            </Row>
            <Row className="dashboardCol">
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