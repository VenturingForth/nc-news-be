const db = require("./db/connection.js");

module.exports.checkArticleIdExists = (article_id) => {
    return db.query(`SELECT * FROM articles WHERE article_id = $1`, [article_id])
    .then(({rows}) => {
        if (rows.length === 0){
            return Promise.reject({status: 404, msg: "Article ID not found"});
        };
    });
};

module.exports.checkTopicExists = (topic) => {
    return db.query(`SELECT * FROM topics WHERE slug = $1`, [topic]).then(({rows}) => {
        if (rows.length === 0){
            return Promise.reject({status: 404, msg: "Topic not found"});
        };
    });
};