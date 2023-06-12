const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

adminSchema.pre('save', async function(next){
  if(!this.isModified('password')){
      next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = bcrypt.hashSync(this.password, salt)
})

adminSchema.methods.matchPassword = async function(enterPass){
  return await bcrypt.compare(this.password, enterPass)
}

adminSchema.methods.hashingPassword = async(enterPass) => {
  return bcrypt.hashSync(enterPass, 10)
}

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
