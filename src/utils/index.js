const fs = require("fs")

const addMovie = (movieObj) => {
    try {
        const stringObj = JSON.stringify(movieObj)
        fs.writeFileSync('./storage.json', stringObj)
    } catch (err) {
        console.log(err)
    }
}

const listMovies = () => {
    try {
        const jsonList = fs.readFileSync('./storage.json')
        const listParser = JSON.parse(jsonList)
        console.log(listParser)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addMovie,
    listMovies
}