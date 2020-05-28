const News = require('../models/news/News')

module.exports.news = async function (req, resp) {
    console.log('In News Controller')

    const newsList = await News.find()
    console.log(newsList)   

    resp.send(newsList)
}