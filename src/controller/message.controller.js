const boom = require('@hapi/boom');

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve({
            hola: "hola"
        })
    })
}

module.exports = {
    getMessages
}