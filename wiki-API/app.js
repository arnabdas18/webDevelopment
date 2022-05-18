const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const e = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

// to find all the articles

app.route("/articles")
.get((req, res) => {
    Article.find((err, foundArticles) => {
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
})
.post((req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(err => {
        if (!err) {
            res.send("Successfully added");
        } else {
            res.send(err);
        }
    });
})
.delete((req, res) => {
    Article.deleteMany(err => {
        if (!err) {
            res.send("Successfully deleted all articles");
        } else {
            res.send(err);
        }
    });
});

// to find a specific article

app.route("/articles/:articleTitle")
.get((req, res) => {
    Article.findOne({title: req.params.articleTitle}, (err, foundArticle) => {
        if(!err) {
            res.send(foundArticle)
        } else {
            res.send("No such article was found");
        }
    });
})
.put((req, res) => {
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        err => {
            if(!err) {
                res.send("Successfully updated the article");
            }
        }
    );
})
.patch((req, res) => {
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        err => {
            if(!err) {
                res.send(" Successfully patched the article")
            }
        }
    );
})
.delete((req, res) => {
    Article.deleteOne(
        {title: req.params.articleTitle},
        err => {
            if(!err) {
                res.send("Successfully deleted");
            }
        }
    );
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});