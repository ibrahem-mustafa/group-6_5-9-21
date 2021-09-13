// ARTICLES ROUTES
const express = require('express');

const router = express.Router()

/* 
    {
        id: number
        title: string,
        content: string,
        createdAt: date,
    }
*/
const articles = [
    {
        id: new Date().getTime(),
        title: 'article One',
        content: "This Is Article One",
        createdAt: new Date()
    }
]

// /articles/getArticles
router.get('/getArticles', (req, res) => {
    res.status(200).json({
        articles
    })
})

// /articles/createArticle
router.post('/createArticle', (req, res) => {
    // const body = req.body;
    // const title = body.title;
    // const content = body.content;

    const {title, content} = req.body

    articles.push({
        id: new Date().getTime(),
        title,
        content,
        createdAt: new Date()
    })


    res.status(201).json({
        articles
    })
    
    
})

// /articles/updateArticle/{{articleId}}
router.put('/updateArticle/:id', (req, res) => {
    // const params = req.params;
    // const id = params.id;

    const {id} = req.params;
    const {title, content} = req.body;

    const article = articles.find(art => art.id == id);

    if (!article) return res.status(404).json({msg: 'Article Not Found'})

    article.title = title;
    article.content = content;


    res.status(200).json({article})
})


router.delete('/deleteArticle/:id', (req, res) => {

    const {id} = req.params

    const articleIndex = articles.findIndex(art => art.id == id);

    if (articleIndex === -1) return res.status(404).json({msg: "Article Not Found"});

    articles.splice(articleIndex, 1)

    res.status(200).json({
        msg: "Article Deleted"
    })
})

module.exports = router;