module.exports = (resp, error) => {
    resp.status(500).json({
        message: error.message ? error.massage : error,
        success: false
    })
}