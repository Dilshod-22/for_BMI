const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://moxirbek:dilshodbek0422@cluster0.fp1t4.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    })
    console.log('MongoDB connected.')
  } catch (error) {
    console.error(`Error:${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
