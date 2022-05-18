const boom = require('@hapi/boom');

const getMessages = () => {
    return new Promise((resolve, reject) => {
        reject(boom.badGateway())
    })
}

module.exports = {
    getMessages
}