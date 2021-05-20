const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, trim: true, unique: true }, 
  password: { type: String, required: true, minlength: 3},
  email: { type: String, unique: true, lowercase: true, trim: true, required: true,
    match: [/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, 'Please fill a valid password']
  },
  name: {type: String, required: true},
  img: { type: String, default:"https://i.imgur.com/ojqEOGn.jpg"},
  age: {type: Number, default:"20" },
  gender: {type: String, enum: ['Male','Female'], default: "none"},
  city: {type: String, default:"Spain"},
  ocupation: {type: String},
  rentPrice: {type: Number, min: 100, default: "0"},
  about: {type: String, maxlength: 250, default: "Im..."},
  messageSend: [{type: Schema.Types.ObjectId, ref: "Message"}],
  messageRecive: [{type: Schema.Types.ObjectId, ref: "Message"}],
  fav: [{type: Schema.Types.ObjectId, ref: "User"}],
  // role: {type: String, enum: ["USER", "ADMIN"], default: "USER"},
// user: {type: Schema.Types.ObjectId, ref: 'User' }
  // created: {type: Date, default: Date.now()},
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;