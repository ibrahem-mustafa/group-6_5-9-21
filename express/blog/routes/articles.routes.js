// ARTICLES ROUTES
const express = require('express');

const router = express.Router();

const {Article,} = require('../models/article.model')
const jwt = require('jsonwebtoken')

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


const user = {
    id: "dkjsafhkashdfkjhsakd",
    name: "ahmed ali"
}

// /articles/getArticles
router.get('/getArticles', async (req, res) => {
    
    const authorization = req.headers.authorization;

    if (!authorization) return res.status(401).json({msg: "Unauthorized Request"});

    try {
        const token = authorization.split(' ')[1]
        const user =  jwt.verify(token, 'dasfkljasdlkjg')
        
        const articles = await Article.find({
            'createdBy.id': user.id
        })

        res.status(200).json({
            articles
        })
    } catch(err) {
        res.status(401).json({msg: "Invalid Token"})
    }

    
})

// /articles/createArticle
router.post('/createArticle', async (req, res) => {
    // const body = req.body;
    // const title = body.title;
    // const content = body.content;

    const {title, content} = req.body

    const authorization = req.headers.authorization // empty/notExist | Bearer ${token}

    if (!authorization) return res.status(401).json({
        msg: 'UnAuthorized Request'
    })
    const token = authorization.split(' ')[1] // ['Bearer', 'token'] => token

    try {
        const user = jwt.verify(token, 'dasfkljasdlkjg')

        const article = new Article({
            title,
            content,
            createdBy: {
                id: user.id,
                name: user.name
            }
        })


        await article.save()

        res.status(201).json({
            article
        })
    } catch(err) {
        res.status(401).json({msg: "Invalid Token"})
    }

    // articles.push({
    //     id: new Date().getTime(),
    //     title,
    //     content,
    //     createdAt: new Date()
    // })

    
    
    
})

// /articles/updateArticle/{{articleId}}
router.put('/updateArticle/:id', async (req, res) => {
    // const params = req.params;
    // const id = params.id;

    const {id} = req.params;
    const {title, content} = req.body;

    // const article = articles.find(art => art.id == id);

    // if (!article) return res.status(404).json({msg: 'Article Not Found'})

    // article.title = title;
    // article.content = content;

    const article = await Article.findByIdAndUpdate(id, {
        title,
        content
    })

    if (!article) return res.status(404).json({msg: 'Article Not Found'})


    res.status(200).json({msg: 'Article Updated Successfully.'})
})


router.delete('/deleteArticle/:id', async (req, res) => {

    const {id} = req.params

    // const articleIndex = articles.findIndex(art => art.id == id);

    // if (articleIndex === -1) return res.status(404).json({msg: "Article Not Found"});

    // articles.splice(articleIndex, 1)

    const article = await Article.findByIdAndDelete(id)

    if (!article) return res.status(404).json({msg: 'Article Not Found'})

    res.status(200).json({
        msg: "Article Deleted Successfully."
    })
})

module.exports = router;