// Require mongoose
// create Schema
// initialize model
// export model

const mongoose = require('mongoose');

/* 
    {
        _id: 'afsdklflkjsadkfjl', // dynamic
        title: 'article 1',
        content: 'article content',
        createdAt: Date(),
        createdBy: {
            id: 'adfkljadslfkjasdklf',
            name: 'ahmed ali'
        }
    }

*/
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdBy: {
        id: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Article = mongoose.model('articles', articleSchema)
module.exports = { Article,  }