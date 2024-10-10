const mongoose = require('mongoose')

mongoose
    .connect(
        'mongodb+srv://shirt-skunk-63:<insert-password>@ga-student-cluster.6hjot.mongodb.net/moviesDatabaseHomework?retryWrites=true&w=majority&appName=ga-student-cluster'
    )
    .then(() => {
        console.log('Connected to MongoDB!!!')
    })
    .catch((e)=> {
        console.error('error!', e.message)
    })

mongoose.set('debug', true) // This creates more bull to read when there's an error, not required

const db = mongoose.connection

module.exports = db